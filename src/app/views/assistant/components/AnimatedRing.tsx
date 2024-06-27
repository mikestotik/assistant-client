import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


interface AnimatedRingProps {
  layers: number;
  speeds: (number | [ number, number ])[];
  colors: (string | string[])[];
  lineWidths: (number | [ number, number ])[];
  innerRadii: (number | [ number, number ])[];
  outerRadii: (number | [ number, number ])[];
  gradientWidths: (number | [ number, number ])[];
}


const getInterpolatedValue = (value: number | [ number, number ], time: number) => {
  if (Array.isArray(value)) {
    const [ min, max ] = value;
    return min + (max - min) * (0.5 * (1 + Math.sin(time)));
  }
  return value;
};

const AnimatedRingComp = (
  {
    layers,
    speeds,
    colors,
    lineWidths,
    innerRadii,
    outerRadii,
    gradientWidths
  }: AnimatedRingProps) => {
  const ringsRef = useRef<THREE.Mesh[]>([]);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    ringsRef.current.forEach((ring, index) => {
      const material = ring.material as THREE.ShaderMaterial;

      if (material && material.uniforms && material.uniforms.u_time) {
        const speed = getInterpolatedValue(speeds[index % speeds.length], elapsed);
        material.uniforms.u_time.value = elapsed * (speed / 100);
      }
    });
  });

  useEffect(() => {
    const vertexShader = `
      uniform float u_time;
      uniform float u_lineWidth;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        vUv = uv;
        vNormal = normal;
        vec3 transformed = position;
        float t = u_time * 0.5;
        transformed.x += sin(t + position.y * 10.0) * u_lineWidth;
        transformed.y += cos(t + position.x * 10.0) * u_lineWidth;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_time;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform float u_gradientWidth;
      varying vec2 vUv;
      varying vec3 vNormal;
      void main() {
        float distanceFromCenter = length(vUv - 0.5);
        float alpha = smoothstep(0.5 - u_gradientWidth, 0.5, distanceFromCenter) - smoothstep(0.5, 0.5 + u_gradientWidth, distanceFromCenter);
        float colorPhase = 0.5 * (1.0 + sin(u_time * 3.14159));
        vec3 color = mix(u_color1, u_color2, colorPhase);
        vec3 light = vec3(0.3, 0.3, 0.4);
        float lighting = dot(vNormal, normalize(light));
        gl_FragColor = vec4(color * lighting, alpha);
      }
    `;

    ringsRef.current.forEach((ring, index) => {
      let color1: THREE.Color;
      let color2: THREE.Color;

      if (Array.isArray(colors[index % colors.length])) {
        const colorArray = colors[index % colors.length] as string[];
        color1 = new THREE.Color(colorArray[0]);
        color2 = new THREE.Color(colorArray[1 % colorArray.length]);
      } else {
        color1 = new THREE.Color(colors[index % colors.length] as string);
        color2 = color1;
      }
      const elapsed = performance.now() / 1000;
      const lineWidth = getInterpolatedValue(lineWidths[index % lineWidths.length], elapsed) / 1000;
      const innerRadius = getInterpolatedValue(innerRadii[index % innerRadii.length], elapsed);
      const outerRadius = getInterpolatedValue(outerRadii[index % outerRadii.length], elapsed);
      const gradientWidth = getInterpolatedValue(gradientWidths[index % gradientWidths.length], elapsed);

      const geometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
      ring.geometry.dispose();
      ring.geometry = geometry;

      ring.material = new THREE.ShaderMaterial({
        uniforms: {
          u_time: { value: 0.0 },
          u_color1: { value: color1 },
          u_color2: { value: color2 },
          u_lineWidth: { value: lineWidth },
          u_gradientWidth: { value: gradientWidth }
        },
        vertexShader,
        fragmentShader,
        side: THREE.DoubleSide,
        transparent: true
      });
    });
  }, [ colors, layers, lineWidths, innerRadii, outerRadii, gradientWidths ]);

  const ringGeometries = Array.from({ length: layers }, (_, i) => (
    <mesh ref={ (el) => el && ringsRef.current.push(el) } key={ i }>
      <ringGeometry args={ [ 0.8, 1, 128 ] }/>
    </mesh>
  ));
  return <>{ ringGeometries }</>;
};

const AnimatedRing = (
  {
    layers,
    speeds,
    colors,
    lineWidths,
    innerRadii,
    outerRadii,
    gradientWidths
  }: AnimatedRingProps) => {
  return (
    <Canvas camera={ { position: [ 0, 0, 5 ], fov: 75 } }>
      <ambientLight intensity={ 0.5 }/>
      <pointLight position={ [ 10, 10, 10 ] } intensity={ 1.5 }/>

      <AnimatedRingComp
        layers={ layers }
        speeds={ speeds }
        colors={ colors }
        lineWidths={ lineWidths }
        innerRadii={ innerRadii }
        outerRadii={ outerRadii }
        gradientWidths={ gradientWidths }
      />
    </Canvas>
  );
};

export default AnimatedRing;

"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";

function subscribeReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

/** Cube filaire + icosaèdre imbriqué — motif "formes isométriques et 3D, structures imbriquées" de IDENTITE_VISUELLE.md */
function NestedStructure() {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  const boxEdges = useMemo(
    () => new THREE.EdgesGeometry(new THREE.BoxGeometry(2.4, 2.4, 2.4)),
    [],
  );
  const icoGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.05, 0), []);
  const icoEdges = useMemo(() => new THREE.EdgesGeometry(icoGeometry), [icoGeometry]);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.22;
      outerRef.current.rotation.x += delta * 0.09;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.35;
      innerRef.current.rotation.x -= delta * 0.15;
    }
  });

  return (
    <group ref={outerRef} rotation={[0.5, 0.6, 0]}>
      <lineSegments geometry={boxEdges}>
        <lineBasicMaterial color="#FF701A" />
      </lineSegments>

      <group ref={innerRef}>
        <mesh geometry={icoGeometry}>
          <meshStandardMaterial
            color="#1A433A"
            roughness={0.35}
            metalness={0.1}
            transparent
            opacity={0.92}
          />
        </mesh>
        <lineSegments geometry={icoEdges}>
          <lineBasicMaterial color="#F8FAFC" transparent opacity={0.3} />
        </lineSegments>
      </group>
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [3.2, 2.4, 3.6], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 2]} intensity={1.1} />
      <NestedStructure />
    </Canvas>
  );
}

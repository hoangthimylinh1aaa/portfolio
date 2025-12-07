<script lang="ts">
    import { onMount } from 'svelte';
    import * as THREE from 'three';

    let container: HTMLDivElement;

    onMount(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position. z = 3;

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        container. appendChild(renderer.domElement);

        // Create plane geometry with waves
        const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);

        // Shader material for custom effects
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                color1: { value: new THREE. Color(0x00ffff) },
                color2: { value: new THREE.Color(0xff00ff) },
            },
            vertexShader: `
        uniform float time;
        varying vec2 vUv;
        varying float vWave;

        void main() {
          vUv = uv;
          vec3 pos = position;

          float wave = sin(pos.x * 2.0 + time) * 0.5;
          wave += sin(pos.y * 3.0 + time * 0.5) * 0.3;
          pos.z = wave;

          vWave = wave;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying float vWave;

        void main() {
          vec3 color = mix(color1, color2, vWave * 0.5 + 0.5);
          gl_FragColor = vec4(color, 0.6);
        }
      `,
            transparent: true,
            wireframe: true,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 3;
        scene.add(mesh);

        // Add particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math. random() - 0.5) * 15;
        }

        particlesGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(posArray, 3)
        );

        const particlesMaterial = new THREE. PointsMaterial({
            size: 0.01,
            color: 0x00ffff,
            transparent: true,
            opacity: 0.6,
            blending: THREE. AdditiveBlending,
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock. getElapsedTime();

            // Update shader time
            material.uniforms.time.value = elapsedTime;

            // Rotate mesh
            mesh.rotation.z = elapsedTime * 0.1;

            // Animate particles
            particlesMesh.rotation.y = elapsedTime * 0.05;

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window. addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
            container.removeChild(renderer.domElement);
        };
    });
</script>

<div bind:this={container} class="fixed inset-0 z-[20]" />

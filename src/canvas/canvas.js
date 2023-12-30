import { useEffect, useState} from 'react';
import './css/canvas.css'
import * as THREE from 'three';
import glb from '../gltf/character.glb'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function setupCanvas(){
    var canvas = document.getElementById('canvas');
    return canvas;
}

function setupRender(canvas,clientWidth,clientHeight){
    var renderer = new THREE.WebGLRenderer({antialias : true, canvas})
        renderer.setSize(clientWidth, clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.shadowMap.enabled = true;
    return renderer;
}

function setupPCamera(fov,aspect,near,far,x,y,z,rx,ry,rz) {
    var camera = new THREE.PerspectiveCamera(fov,aspect,near,far);
        camera.position.set(x,y,z);
        camera.lookAt(rx,ry,rz);
    return camera;
};

function setupOCamera(aspect,near,far,xleft,xright,ytop,ybottom,x,y,z,rx,ry,rz) {
    var camera = new THREE.OrthographicCamera(
        xleft * aspect, xright *aspect, 
        ytop,ybottom,
        near,far
        );
        camera.position.set(x,y,z);
        camera.lookAt(rx,ry,rz);
    return camera;
};

function setupDirectLight(color,intensity,x,y,z,rx,ry,rz){
    var light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x,y,z);
        light.target.position.set(rx,ry,rz);
        light.name = 'DLight';
        light.castShadow = true;
        light.shadow.mapSize.set(2048,2048);
        light.shadow.radius = 6;
    return light;
}

function setupAmbientLight(color,intensity){
    var light = new THREE.AmbientLight(color, intensity);
    light.name = 'ALight';
    return light;
}

function setupPointLight(color,intensity){
    var light = new THREE.PointLight(color, intensity);
    light.name = 'PLight';   
    return light;
}

function lightHelper(light){
    var helper = null;
    if (light instanceof THREE.DirectionalLight)  { 
        helper = new THREE.DirectionalLightHelper(light); 
    } 
    else if (light instanceof THREE.PointLight)   { 
        helper = new THREE.PointLightHelper(light);
    }
    helper.name = 'LightHelper';
    return helper;
}


function setupModelBox(color,width,height,depth,x,y,z,rx,ry,rz){   
    var geometry = new THREE.BoxGeometry(width,height,depth);
    var material = new THREE.MeshPhongMaterial({ color : color})
    var cube = new THREE.Mesh(geometry,material);
        cube.position.set(x,y,z);
        cube.rotation.set(rx,ry,rz);
        cube.receiveShadow = true;
    return cube;
}

function setupTestBox(width,height,depth,x,y,z,rx,ry,rz){   
    var geometry = new THREE.BoxGeometry(width,height,depth);
    var material = new THREE.MeshPhongMaterial({})
    var cube = new THREE.Mesh(geometry,material);
        cube.position.set(x,y,z);
        cube.rotation.set(rx,ry,rz);
        cube.receiveShadow = true;
    return cube;
}


function setupVideoBox(cube){
    const video = document.getElementById("video");
    const constraints = {video:{width : cube.geometry.parameters.width, height : cube.geometry.parameters.height}};
        navigator.mediaDevices.getUserMedia(constraints).then(

            stream => {
                video.srcObject = stream;
                video.autoplay = true;
                video.playsinline = true;
                video.style.objectFit = 'cover';

                video.addEventListener('loadeddata', () => {
                    cube.material.map = new THREE.VideoTexture(video);;
                    video.play();
                });
            })
            .catch(function (error){
                console.log(error)
            })
    return cube;
}

function setupModelSola(){
    var solar = new THREE.Object3D();
        solar.name = 'solar';
    var earth = new THREE.Object3D();
        earth.name = 'earth';
        earth.position.x = 5;

    var moon = new THREE.Object3D();
        moon.name = 'moon';
        moon.position.x = 2;

    var radius = 1;
    var widthsegments = 12;
    var heightsegments = 12;
    
    var sphereGeometry = new THREE.SphereGeometry(radius,widthsegments,heightsegments);
    
    var sunMaterial    = new THREE.MeshStandardMaterial({emissive : 0xffff00, flatShading : true, roughness : 0.1 , metalness : 0.2});
    var earthMaterial  = new THREE.MeshStandardMaterial({color : 0x2233ff, emissive : 0x112244, flatShading : true ,roughness : 0.1 , metalness : 0.2});
    var moonMaterial   = new THREE.MeshStandardMaterial({color : 0x888888, emissive : 0x222222, flatShading : true , roughness : 0.1 , metalness : 0.2});   
    
    var sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);        
        sunMesh.receiveShadow = true;
        sunMesh.castShadow = true;
    var earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial); 
        earthMesh.receiveShadow = true;
        earthMesh.castShadow = true;
    var moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);    
        moonMesh.receiveShadow = true;
        moonMesh.castShadow = true;

        earthMesh.scale.set(0.5,0.5,0.5);
        moonMesh.scale.set(0.2,0.2,0.2);
    
        solar.add(sunMesh);
        solar.add(earth);
            earth.add(earthMesh);
            earth.add(moon);
                moon.add(moonMesh);
    return [solar,earth,moon];
}       


function getObject(scene,name){
    return scene.getObjectByName(name.toString());
}



function Canvas() {
    const scene = new THREE.Scene();
    const GLTF = new GLTFLoader();
    
    // up, down, right, left
    const key   = ['ArrowUp','ArrowDown','ArrowRight','ArrowLeft'];
    const [boxHelper, boxHelperSet] = useState(null);

    var keys    = [false,false,false,false];
    var gltf    = null;
    var animationMap = {};
    var mixer = null;

    function keyup(){
        window.addEventListener("keyup", (event)=>{
            event.preventDefault();
            var prevKeys = [...keys];
            switch (event.code) {
                case key[0]:
                    if(prevKeys[0] === true){
                        prevKeys[0] = false;
                        keys = prevKeys;
                    }
                    break;
                case key[1]:
                    if(prevKeys[1] === true){
                        prevKeys[1] = false;
                        keys = prevKeys;
                    }
                    break;
                case key[2]:
                    if(prevKeys[2] === true){
                        prevKeys[2] = false;
                        keys = prevKeys;
                    }
                    break;
                case key[3]:
                    if(prevKeys[3] === true){
                        prevKeys[3] = false;
                        keys = prevKeys;
                    }
                    break;
                default:
                    break;
            } ;
        })
    }

    

    function keydown(){
        window.addEventListener("keydown", (event)=>{
            event.preventDefault();
            var prevKeys = [...keys];
            switch (event.code) {
                case key[0]:
                    if(prevKeys[0] === false){
                        prevKeys[0] = true;
                        keys = prevKeys;
                    }
                    break;
                case key[1]:
                    if(prevKeys[1] === false){
                        prevKeys[1] = true;
                        keys = prevKeys;
                    }
                    break;
                case key[2]:
                    if(prevKeys[2] === false){
                        prevKeys[2] = true;
                        keys = prevKeys;
                    }
                    break;
                case key[3]:
                    if(prevKeys[3] === false){
                        prevKeys[3] = true;
                        keys = prevKeys;
                    }
                    break;
                default:
                    break;
            } ;
        })
    }

    function gltfLoad(){
        GLTF.load(glb, (g)=>{
            const model = g.scene;
            const animation = g.animations;
            const helper = new THREE.BoxHelper(model);
                  mixer = new THREE.AnimationMixer(model);

                animation.forEach((clip)=>{
                    const name = clip.name;
                    animationMap[name] = mixer.clipAction(clip);
                })

                animationMap['걷기'].play();

                gltf = model;   
                
                scene.add(model);
                scene.add(helper);
                
                boxHelperSet(helper); 
            
        })
    }

    useEffect(()=>{
        const canvas = setupCanvas();
        const renderer = setupRender(canvas,canvas.clientWidth,canvas.clientHeight);
        const axisHelper = new THREE.AxesHelper(1000);
        const Pcamera = setupPCamera(75,canvas.clientWidth/canvas.clientHeight,0.1,1000,0,3,5,0,0,0);
        const Ocamera = setupOCamera(canvas.clientWidth/canvas.clientHeight,0.1,100,1,-1,1,-1,0,0,30,0,0,0);
        const cameraHelper = new THREE.CameraHelper(Pcamera);
        const ALight = setupAmbientLight();
        const DLight = setupDirectLight(0xffffff,2,0,5,0,0,0,0);
        const DLightHelper = lightHelper(DLight);
        const Plight = setupPointLight(0xffffff,2);
        const solra = setupModelSola();
        const cube = setupModelBox(0x44aa88,10,0.2,10,0,-0.1,0,0,0,0);
        const mouse = new OrbitControls(Pcamera,canvas);
            mouse.target.set(0,1,0);

        const mixer = new THREE.AnimationMixer(getObject(scene,'animationClips'));
            keydown();
            keyup();
            gltfLoad();

            scene.add( axisHelper );
            scene.add( ALight );
            scene.add( DLight );
            scene.add( DLightHelper );            
            scene.add( cube );        
            scene.add( cameraHelper );
            

            function directionOffset(){
    
            }

            function render(time) {
                time *= 0.001;
                if(gltf){
                    var copy = {...gltf}

                    const angleCamera = Math.atan2(
                        (Pcamera.position.x - gltf.position.x)
                        ,(Pcamera.position.z - gltf.position.z))
                        + Math.PI;
                    
                    const rotate = new THREE.Quaternion();
                        rotate.setFromAxisAngle(new THREE.Vector3(0,1,0),angleCamera)
                        gltf.quaternion.rotateTowards(rotate,THREE.MathUtils.degToRad(5));
                        
                    /*
                    if(keys[3]){
                        copy.rotation.y = copy.rotation.y + 0.05;
                        gltf = copy;
                    }
                    if(keys[2]){
                        copy.rotation.y = copy.rotation.y - 0.05;
                        gltf = copy;
                    }
                    */
                }


                //if(mixer){mixer.update(time);}
                if(boxHelper){boxHelper.update();}
                if(mouse){mouse.update();}

                    //getObject(scene,'solar').rotation.y = time/2 
                    //getObject(scene,'earth').rotation.y = time/2
                    //getObject(scene,'moon').rotation.y = time/2
                    //getObject(scene,'earth').getWorldPosition(getObject(scene,'DLight').target.position);
                    //getObject(scene,'LightHelper').update();

                renderer.render(scene, Pcamera);
                requestAnimationFrame((time)=>{render(time)});
            }

            requestAnimationFrame((time)=> render(time));
    },[])

    return (
        <>
            <canvas id="canvas" className="vh-100 vw-100"></canvas>
        </>
    );
}

export default Canvas;
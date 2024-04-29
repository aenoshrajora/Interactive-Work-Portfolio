import * as THREE from 'three';
import { LAPTOP_PART_TYPE, LAPTOP_POSITION_STATE, LAPTOP_STATE, MUSIC_TYPE } from "./laptop-data";

const LAPTOP_CONFIG = {
    showDebugButtons: false,
    state: LAPTOP_STATE.Idle,
    positionType: LAPTOP_POSITION_STATE.Opened,
    currentMusicType: null,
    defaultAngle: 123,
    maxOpenAngle: 123,
    rotationSpeed: 18,
    angle: 0,
}

const LAPTOP_MOUNT_CONFIG = {
    startAngle: 35,
    angle: 0,
    leftEdgeAngle: 0,
    rightEdgeAngle: 35,
}

const LAPTOP_SCREEN_MUSIC_CONFIG = {
    mouseOverColor: new THREE.Color(0x48f243),
    buttons: {
        [LAPTOP_PART_TYPE.LaptopScreenMusic01]: {
            signalName: 'onLaptopScreenMusic01Click',
            musicType: MUSIC_TYPE.FedUp,
            area: {
                position: new THREE.Vector2(0.14, 0.67),
                size: new THREE.Vector2(0.92, 0.14),
            },
            texturePlaying: 'screens/laptop/laptop-music-01-playing',
            texturePause: 'screens/laptop/laptop-music-01-pause',
        },
        [LAPTOP_PART_TYPE.LaptopScreenMusic02]: {
            signalName: 'onLaptopScreenMusic02Click',
            musicType: MUSIC_TYPE.CarolOfTheBells,
            area: {
                position: new THREE.Vector2(0.14, 0.48),
                size: new THREE.Vector2(0.92, 0.14),
            },
            texturePlaying: 'screens/laptop/laptop-music-02-playing',
            texturePause: 'screens/laptop/laptop-music-02-pause',
        },
        [LAPTOP_PART_TYPE.LaptopScreenMusic03]: {
            signalName: 'onLaptopScreenMusic03Click',
            musicType: MUSIC_TYPE.CourtesyCall,
            area: {
                position: new THREE.Vector2(0.14, 0.29),
                size: new THREE.Vector2(0.92, 0.14),
            },
            texturePlaying: 'screens/laptop/laptop-music-03-playing',
            texturePause: 'screens/laptop/laptop-music-03-pause',
        },
    },
}

const MUSIC_CONFIG = {
    [MUSIC_TYPE.CarolOfTheBells]: {
        fileName: 'music/carol-of-the-bells',
        song: 'Come and get your love',
        artist: 'Redbone',
    },
    [MUSIC_TYPE.FedUp]: {
        fileName: 'music/FedUp',
        song: 'Fed Up',
        artist: 'GHOSTEMANE',
    },
    [MUSIC_TYPE.CourtesyCall]: {
        fileName: 'music/courtesy-call',
        song: 'Courtesy Call',
        artist: 'Thousand Foot Krutch',
    },
    [MUSIC_TYPE.TheStomp]: {
        fileName: 'music/the-stomp',
        song: 'Showreel video',
        artist: '',
    },
}

export {
    LAPTOP_CONFIG,
    LAPTOP_MOUNT_CONFIG,
    LAPTOP_SCREEN_MUSIC_CONFIG,
    MUSIC_CONFIG,
};
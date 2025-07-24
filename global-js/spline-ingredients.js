import { Application } from 'https://unpkg.com/@splinetool/runtime@0.9.491/build/runtime.js';

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const app = new Application(canvas);
app.load('/models/ingredients/scene.splinecode');
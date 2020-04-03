attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float timeFactor;
uniform sampler2D water;
uniform sampler2D waterMap;

varying float height;
varying vec2 vTextureCoord;

void main() {
    vec3 offset = vec3(0.0, 0.0, 0.0);

    vec2 currentMapOffset = aTextureCoord + vec2(timeFactor, timeFactor);
    vTextureCoord = currentMapOffset;

    if (currentMapOffset.s > 1.0)
        currentMapOffset.s -= 1.0;
    if (currentMapOffset.t > 1.0)
        currentMapOffset.t -= 1.0;

    height = texture2D(waterMap, currentMapOffset).b;
    offset.z = height / 20.0;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}


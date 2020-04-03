#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform float timeFactor;

uniform sampler2D water;
uniform sampler2D waterMap;

varying float height;

void main() {
	vec4 color = texture2D(water, vTextureCoord);

	color = vec4(color.rgb - (height / 7.0), 1.0);

	gl_FragColor = color;
}
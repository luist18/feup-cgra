/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyDiamond extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-1, 0, 0,	//0
			0, -1, 0,	//1
			0, 1, 0,	//2
			1, 0, 0,	//3

			-1, 0, 0,	//4 0
			0, -1, 0,	//5 1
			0, 1, 0,	//6 2
			1, 0, 0		//7 3
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
			1, 3, 2,
			6, 5, 4,
			6, 7, 5
		];

		this.normals = [];

		for (let i = 0; i < 4; ++i) // 4: number of vertices
			this.normals.push(0, 0, 1);

		for (let i = 0; i < 4; ++i)
			this.normals.push(0, 0, -1);

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


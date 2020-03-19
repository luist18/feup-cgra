/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0, 2, 0,	//0
			-2, 0, 0,	//1
            0, 0, 0,	//2
			2, 0, 0,    //3
			
			0, 2, 0,	//0 4
			-2, 0, 0,	//1 5
            0, 0, 0,	//2 6
            2, 0, 0,    //3 7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
			0, 2, 3,
			6, 5, 4,
			7, 6, 4
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


/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			1, 1, 0,	//0
			0, 0, 0,	//1
            1, 0, 0,	//2
            2, 0, 0,    //3
            3, 1, 0,    //4
			2, 1, 0,    //5
			
			1, 1, 0,	//0 6
			0, 0, 0,	//1 7
            1, 0, 0,	//2 8
            2, 0, 0,    //3 9
            3, 1, 0,    //4 10
            2, 1, 0     //5 11
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            0, 2, 3,
            0, 3, 5,
			3, 4, 5,

			8, 7, 6,
            9, 8, 6,
            11, 9, 6,
            11, 10, 9
		];
		
		this.normals = [];

		for (let i = 0; i < 6; ++i)
			this.normals.push(0, 0, -1);
			
		for (let i = 0; i < 6; ++i) // 4: number of vertices
			this.normals.push(0, 0, 1);

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}


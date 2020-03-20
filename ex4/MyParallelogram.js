/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();

		if (coords != undefined)
			this.updateTexCoords(coords);
	}
	initBuffers() {
		this.vertices = [
			0, 0, 0,	// 0 4
			2, 0, 0,	// 1 5
			3, 1, 0,	// 2 6
			1, 1, 0,	// 3 7

			0, 0, 0,
			2, 0, 0,
			3, 1, 0,
			1, 1, 0,
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			3, 1, 0,
            3, 2, 1,
            4, 5, 7,
            5, 6, 7
		];

		this.normals = [];
        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, 1);

        for (let i = 0; i < 4; ++i)
            this.normals.push(0, 0, -1);

		this.texCoords = [
			1, 1,
			0.5, 1,
			0.25, 0.75,
			0.75, 0.75,
			1, 1,
			0.5, 1,
			0.25, 0.75,
			0.75, 0.75
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	/**
	* @method updateTexCoords
	* Updates the list of texture coordinates of the quad
	* @param {Array} coords - Array of texture coordinates
	*/
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}


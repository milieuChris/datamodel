/// <reference path="gooobject.ts"/>


interface project extends GooObject {

	/**
	 * Should always be in scenes as well
	 */
	mainScene: SceneRef;
	
	scenes: {
		[listId: string]: {
			sortValue: number;
			sceneRef: SceneRef;
		}
	}

	assets: {
		[listId: string]: {
			sortValue: number;
			assetRef: string;
		}
	}

	publishedUrl?: URI;
}
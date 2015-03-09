/// <reference path="common.ts"/>

interface AnnouncementSettings {
	timestamp: int;
	data: {
		[announcementId: string]: boolean;
	};
}

interface BinSettings {
	timestamp: int;
	data: {
		filters?: {
			[listId: string]: boolean;
		};
	};
}

interface CanvasSettings {
	timestamp: int;
	data: {
		viewFilters?: {
			[listId: string]: boolean;
		};
		shadingMode?: string;
	};
}

interface ExportSettings {
	timestamp: int;
	data: {
		includeShareButtons?: boolean;
		includeLogo?: boolean;
		transparentBackground?: boolean;
	};
}

enum ShortCutMode {
	legacy,
	blender
}

enum UITheme {
	'dark-theme',
	'bright-theme'
}

interface ViewConfigSettings {
	timestamp: int;
	data: {
		leftPanelWidth?: int;
		rightPanelWidth?: int;
		binHeight?: int;
		keyboardShortcutsMode?: ShortCutMode;
		timelineHeight?: int;
		theme?: UITheme;
	}
}

interface TimelineSettings {
	settings?: {
		timestamp: int;
		data: {
			autoKey?: boolean;
		};
	};
}

interface InspectorSettings {
	// Stores which scripts are collapsed for each entity.
	collapsedScripts?: {
		[entityId: string]: {
			timestamp: int;
			data: {
				[scriptId: string]: boolean;
			};
		};
	};
	// Stores which panels are collapsed for each entity.
	collapsedPanels?: {
		[entityId: string]: {
			timestamp: int;
			data: {
				[panelId: string]: boolean;
			};
		};
	};
}

interface usersettings {
	announcements?: AnnouncementSettings;
	bin?: BinSettings;
	canvas?: CanvasSettings;
	inspector?: InspectorSettings;
	export?: ExportSettings;
	timeline?: TimelineSettings;
	viewConfig?: ViewConfigSettings;
}
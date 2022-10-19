/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import DecoupledDocumentEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import MathType from '@wiris/mathtype-ckeditor5';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';

class Editor extends DecoupledDocumentEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	AutoImage,
	Bold,
	CKFinderUploadAdapter,
	Essentials,
	FontColor,
	FontFamily,
	FontSize,
	GeneralHtmlSupport,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Italic,
	MathType,
	Paragraph,
	PasteFromOffice,
	SpecialCharacters,
	SpecialCharactersArrows,
	SpecialCharactersCurrency,
	SpecialCharactersEssentials,
	SpecialCharactersLatin,
	SpecialCharactersMathematical,
	SpecialCharactersText,
	Strikethrough,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline
];

// Editor configuration.

Editor.defaultConfig = {

	toolbar: {
		items: [
			'fontSize',
			'fontFamily',
			'fontColor',
			'alignment',
			'lineHeight',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'imageUpload',
			'insertTable',
			'|',
			'specialCharacters',
			'ChemType',
			'MathType',
			'math'
		]
	},
	ignoreEmptyParagraph : false,
	language: 'zh-cn',
	fontFamily: {
		options: [
		  '宋体',
		  '楷体GB2312',
		  '新宋体',
		  '黑体',
		  '隶书',
		  '幼圆',
		  '微软雅黑',
		  'Aria'
		]
	  },
	  fontSize: {
		options: [
			{ title: '八号', model: '1.76mm' },
			{ title: '七号', model: '1.94mm' },
			{ title: '小六', model: '2.29mm' },
			{ title: '小五', model: '3.18mm' },
			{ title: '五号', model: '3.70mm' },
			{ title: '小四', model: '4.23mm' },
			{ title: '四号', model: '4.49mm' },
			{ title: '小三', model: '5.29mm' },
			{ title: '三号', model: '5.64mm' },
			{ title: '小二', model: '6.35mm' },
			{ title: '二号', model: '7.76mm' }
		]
	  },
	  
	image: {
        resizeUnit: 'px',
		styles: ["alignLeft", "full", "alignRight"],
		toolbar: [
			'imageTextAlternative',
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:full',
			'imageStyle:alignLeft',
			'imageStyle:alignRight',
		]
	},
	htmlSupport: {
		allow: [
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true
			}
		],
	},
	math: {
		engine: 'katex', // or katex or function. E.g. (equation, element, display) => { ... }
		lazyLoad: undefined, // async () => { ... }, called once before rendering first equation if engine doesn't exist. After resolving promise, plugin renders equations.
		outputType: 'script', // or span
		forceOutputType: false, // forces output to use outputType
		enablePreview: true, // Enable preview view
		previewClassName: [], // Class names to add to previews
		popupClassName: [] // Class names to add to math popup balloon
	  },
	  lineHeight: {
		// specify your otions in the lineHeight config object. Default values are [ 0, 0.5, 1, 1.5, 2 ]
		options:  [ 0.5,0.6,0.8,1,1.2,1.5, 2]
	  },
	  ckfinder: {
		// Upload the images to the server using the CKFinder QuickUpload command.
		uploadUrl:
		  'https://examapi.xycxedu.com/api/external/uploadimage?'
	  },
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	}
};


export default Editor;

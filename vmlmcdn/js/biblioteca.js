function returnHyperLink(cellValue, options, rowdata, action) {
	return "<a href='" + cellValue + "' target='_blank'>Ver</a>";
};

function pageLoaded(){
	$("#grid").jqGrid({ //set your grid id
		data: mydata, //insert data from the data object we created above
		datatype: 'local',
		width: 500,
		colNames: ['Id', 'Libro', 'Autor', 'Tema', 'URL'], //define column names
		colModel: [ //define column models
			{name:'id', index:'id', width:25, sorttype:'int'},
			{name:'libro', index:'libro', width:100},
			{name:'autor', index:'autor', width:125},
			{name:'tema', index:'tema', width:100},
			{name:'enlace', index:'enlace', width:35, formatter: returnHyperLink}
		],
		rowNum:10,
		pager: '#pager', //set your pager div id
		sortname: 'id', //the column according to which data is to be sorted;
		viewrecords: true, //if true, displays the total number of records, etc.
		sortorder: "asc", //sort order; optional
		caption: "Biblioteca DIEVDS" //title of grid
	});
	jQuery("#grid").jqGrid('navGrid','#pager',{edit:false, add:false, del:false});
}
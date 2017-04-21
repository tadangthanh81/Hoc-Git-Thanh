var host = window.location.href;//backend
host = host.split("backend");
tinymce.init({
		selector: 'textarea',theme: "modern",
		height: "",
		width:"",
		plugins: [
			"advlist autolink lists link image charmap print preview hr anchor pagebreak",
			"searchreplace wordcount visualblocks visualchars fullscreen",
			"insertdatetime media nonbreaking save table contextmenu directionality",
			"emoticons template paste textcolor colorpicker textpattern imagetools code fullscreen"
		],
		toolbar1: "undo redo bold italic underline strikethrough cut copy paste| alignleft aligncenter alignright alignjustify bullist numlist outdent indent blockquote searchreplace | styleselect formatselect fontselect fontsizeselect ",
		toolbar2: "table | hr removeformat | subscript superscript | charmap emoticons ltr rtl | spellchecker | visualchars visualblocks nonbreaking template pagebreak restoredraft | link unlink anchor image media | insertdatetime preview | forecolor backcolor print fullscreen code ",
		image_advtab: true,
		menubar: false,
		toolbar_items_size: 'small',
        relative_urls: false,
        remove_script_host : false,
        external_filemanager_path:host[0]+"filemanager/",
		filemanager_title:"Quan ly file" ,
		external_plugins: { "filemanager" : host[0]+"filemanager/plugin.min.js"},
        file_browser_callback: 'RoxyFileBrowser',
		file_browser_callback_types: 'file image media'
});

$(document).ready(function() {
	$("#product-startsale").datepicker({ dateFormat: 'dd-mm-yy' });
	$("#product-endsale").datepicker({ dateFormat: 'dd-mm-yy' });

	$("#proImg").click(function(event) {
		$("#myModal").modal('show');
	});

	$('#myModal').on('hidden.bs.modal', function () {
    	imgSrc = $("#proImg").val();
    	$("#previewImage").attr({
    		'src' : imgSrc
    	})
	});
});

'use strict';

(function () {

  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var fileChooser = document.querySelector('.upload input[type=file]');
  var previewBlock = document.querySelector('.notice__preview');
  var preview = document.querySelector('.notice__preview img');
  fileChooser.addEventListener('change', function () {
    var file = fileChooser.files[0];
    var fileName = file.name.toLowerCase();

    var matches = FILE_TYPES.some(function (it) {
      return fileName.endsWith(it);
    });

    if (matches) {
      var reader = new FileReader();

      reader.addEventListener('load', function () {
        previewBlock.style.padding = 0;
        previewBlock.width = 70;
        preview.src = reader.result;
        preview.width = 70;
        preview.height = 70;
      });

      reader.readAsDataURL(file);
    }
  });

})();

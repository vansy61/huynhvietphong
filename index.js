var lixi;
// Check if the item is present in localStorage
if (localStorage.getItem('lixi') !== null) {
  // Item is present, retrieve it
  lixi = JSON.parse(localStorage.getItem('lixi'));
} else {
  var lixi = {matkhau: '', step: 0}
  localStorage.setItem('lixi', JSON.stringify(lixi));
  location.reload()
}


$('#form-contact').on('submit', function(e) {
  e.preventDefault()
  let matkhau = $("#matkhau").val()
  if(matkhau == 'vietphong23082003') {
    lixi.matkhau = matkhau;
    lixi.step = 1;
    localStorage.setItem('lixi', JSON.stringify(lixi));
    location.reload()
  }else {
    alert('Mật khẩu không đúng !!!!!!!!!!!!!!')
  }
})

$('#button-card').click(function() {
  lixi.step = 2;
  localStorage.setItem('lixi', JSON.stringify(lixi));
  location.reload()
})

if(lixi.step == 2) {
$('.card-pick').click(function() {
  if($(this).hasClass('bg-1')) {
    lixi.picked = 1;
  }else if($(this).hasClass('bg-2')) {
    lixi.picked = 2;

  }else if($(this).hasClass('bg-3')) {
    lixi.picked = 3;
    
  }else if($(this).hasClass('bg-4')) {
    lixi.picked = 4;
    
  }

  lixi.step = 3;
  localStorage.setItem('lixi', JSON.stringify(lixi));
  location.reload()

})
}


if(lixi.step == 0) {
  $('#login').removeClass('d-none')  
}else if(lixi.step == 1) {
  $('#main, #button-card').removeClass('d-none')
}else if(lixi.step == 2) {
  $('#main, #group-card').removeClass('d-none')
}else if(lixi.step == 3) {
  $('#main, #group-card').removeClass('d-none')
  if(lixi.picked == 1) {
    $('.card-pick.bg-1').html('<p>50.000</p>')
    $('.card-pick.bg-2').html('<p>20.000</p>').addClass('opa')
    $('.card-pick.bg-3').html('<p>100.000</p>').addClass('opa')
    $('.card-pick.bg-4').html('<p>200.000</p>').addClass('opa')
  }else if(lixi.picked == 2) {
    $('.card-pick.bg-1').html('<p>20.000</p>').addClass('opa')
    $('.card-pick.bg-2').html('<p>50.000</p>')
    $('.card-pick.bg-3').html('<p>200.000</p>').addClass('opa')
    $('.card-pick.bg-4').html('<p>100.000</p>').addClass('opa')
  }else if(lixi.picked == 3) {
    $('.card-pick.bg-1').html('<p>200.000</p>').addClass('opa')
    $('.card-pick.bg-2').html('<p>100.000</p>').addClass('opa')
    $('.card-pick.bg-3').html('<p>50.000</p>')
    $('.card-pick.bg-4').html('<p>20.000</p>').addClass('opa')
  }else if(lixi.picked == 4) {
    $('.card-pick.bg-1').html('<p>200.000</p>').addClass('opa')
    $('.card-pick.bg-2').html('<p>20.000</p>').addClass('opa')
    $('.card-pick.bg-3').html('<p>100.000</p>').addClass('opa')
    $('.card-pick.bg-4').html('<p>50.000</p>')
  }
  $('#success-text').html('<p>Chúc Việt Phong Năm Mới</p><p>Ngàn lần như ý - Vạn sự như mơ</p><p>Triệu sự bất ngờ - Tỷ lần hạnh phúc.</p><p class="mt-5"><small>Lì xì sẽ được gửi lúc giao thừa nha !!!</small></p>')
}

var imageData = [
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._01_-_Autorretrato._Francisco_Goya_y_Lucientes2C_pintor_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._02_-_El_si_pronuncian_y_la_mano_alargan_al_primero_que_llega_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._03_-_Que_viene_el_Coco_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._04_-_El_de_la_rollona_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._05_-_Tal_para_qual_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._06_-_Nadie_se_conoce_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._07_-_Ni_asi_la_distingue_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._09_-_Tantalo_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._10_-_El_amor_y_la_muerte_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._11_-_Muchachos_al_avC3ADo_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._12_-_A_caza_de_dientes_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._13_-_Estan_calientes_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._14_-_Que_sacrificio21_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._15_-_Bellos_consejos_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._16_-_Dios_la_perdone_-_Y_era_su_madre_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._17_-_Bien_tirada_estC3A1_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._18_-_Y_se_le_quema_la_Casa_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._19_-_Todos_CaerC3A1n_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._20_-_Ya_van_desplumados_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._21_-_C2A1Qual_la_descaC3B1onan21_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._22_-_Pobrecitas21_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._23_-_Aquellos_polbos_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._24_-_No_hubo_remedio_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._25_-_Si_quebrC3B3_el_Cantaro_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._26_-_Ya_tienen_asiento_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._27_-_Quien_mC3A1s_rendido3F_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._28_-_Chiton_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._29_-_Esto_si_que_es_leer_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._30_-_Porque_esconderlos3F_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._31_-_Ruega_por_ella_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._32_-_Por_que_fue_sensible_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._33_-_Al_Conde_Palatino_thumb.jpg',
   'http://demo.famo.us.s3.amazonaws.com/hub/apps/carousel/Museo_del_Prado_-_Goya_-_Caprichos_-_No._34_-_Las_rinde_el_SueC3B1o_thumb.jpg'
];

var contextSize = window.innerHeight;

function randomCoordinates(imageData) {
  var result = [];
  for(var i = 0; i < imageData.length; i++) {
    result.push(Math.floor(contextSize/2+100+Math.random()*contextSize*2));
  }
  return result;
}

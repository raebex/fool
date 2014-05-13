;(function($) {
	'use strict';

	//sounds
	var sound;
	var $sounds = $('.sound');
	var $f1 = $('#f1');
	var $f2 = $('#f2');
	var $f3 = $('#f3');
	var $f4 = $('#f4');
	var $f6 = $('#f6');
	var $f9 = $('#f9');
	var $f10 = $('#f10');

	var $f11 = $('#f11');
	var $f12 = $('#f12');
	var $f13 = $('#f13');
	var $f14 = $('#f14');
	var $f15 = $('#f15');
	var $f16 = $('#f16');
	var $f17 = $('#f17');
	var $f19 = $('#f19');

	var $f20 = $('#f20');
	var $f21 = $('#f21');
	var $f24 = $('#f24');
	var $f25 = $('#f25');
	var $f26 = $('#f26');
	var $f27 = $('#f27');
	var $f29 = $('#f29');

	var $f31 = $('#f31');
	var $f32 = $('#f32');
	var $f33 = $('#f33');
	var $f34 = $('#f34');
	var $f35 = $('#f35');
	var $f36 = $('#f36');

	//shapes
	var $shapes = $('#shapes');
	var $container = $('body');

	var $hint = $('.hint');

	

	window.onkeydown = keydown;	

	if (has.mobile === true){
		console.log('hi');
		$hint.children('p').text('Touch anywhere!');
	}else {
		$hint.children('p').text('Press any key, A to Z!');
	}

	window.addEventListener('load', function(){ // on page load
	 
	document.body.addEventListener('touchstart', function(e){
	  $hint.fadeOut();
	 }, false)
	 
	}, false)

//sound function
	$sounds.load();
	var playSound = function(){
		sound.currentTime = 0;
		//sound.load();
		sound.get(0).play();
		return false;
	}

	// var playSound = function(){
	// 	if (sound.paused) {
 //        sound.trigger('play');
	//     }else{
	//         sound.currentTime = 0
	//     }
	//     return false;
	// }
	

//animations--------------------->

	var qZoom = function(){	
		sound = $f1;
		sound.get(0).pause();	
		playSound();
		$('#seventythree').stop(true, true).fadeIn(50, function(){
			$('#eightynine').fadeIn(50, function(){
				$('#fourteen').fadeIn(50, function(){
					$('#sixtyseven').fadeIn(50, function(){
						$('#onehundred10').fadeIn(50, function(){
							$('#twentyfour').fadeIn(50, function(){
								$('#seventythree, #eightynine').css({
									"transform" : "scale(2) rotate(20deg)",
									"-webkit-transform":"scale(2) rotate(20deg)"
								});	
								$('#fourteen, #sixtyseven').css({
									"transform" : "scale(2) rotate(-60deg)",
									"-webkit-transform":"scale(2) rotate(-60deg)"
								});
								$('#onehundred10, #twentyfour').css({
									"transform" : "scale(2) rotate(-10deg)",
									"-webkit-transform":"scale(2) rotate(-10deg)"
								});
							}).delay(500).fadeOut('slow', function(){
								$('#seventythree, #eightynine, #fourteen, #sixtyseven, #onehundred10, #twentyfour').removeAttr('style');
							});
						});
					});
				});
			});
		});
	} 

	var wJiggleZoom = function(){
		sound = $f2;	
		playSound();
		$('#two').stop(true, true).fadeIn('fast', function(){
			$('#two').css({
				"transform" : "scale(2)",
				"-webkit-transform":"scale(2)"
			});	
		}).delay(100).fadeOut('slow', function(){
			$('#two').removeAttr('style');
		});
	}

	var eJiggle = function(){
		sound = $f3;	
		playSound();
		$('#three').stop(true, true).fadeIn(50, function(){
			$('#twentyone').fadeIn(50, function(){
				$('#ninetyfive').fadeIn(50, function(){
					$('#fortyseven').fadeIn(50, function(){
						$('#seven').fadeIn(50, function(){
							$('.shape').fadeOut();
						});
					});
				});
			});
		});
	}

	var rFadeIn = function(){
		sound = $f4;	
		playSound();
		$('#four').stop(true, true).fadeIn('normal', function(){
			$(this).fadeOut('slow');
		});

		$container.css({
			"background-color": "#6bd4f9"
		});
	}

	var tSkyAqua = function(){
		sound = $f6;	
		playSound();
		$('.sky, .aqua').stop(true, true).fadeIn('normal', function(){
			$(this).fadeOut('slow');
		});
	}

	var ySquiggle = function(){
		sound = $f9;	
		playSound();
		$('#sixtyeight, #fortyfive, #thirtyfive').stop(true, true).fadeIn().delay(2000).fadeOut();
	}

	var uZoomOut = function(){
		sound = $f10;	
		playSound();

		$('#seven').stop(true, true).fadeIn('fast', function(){
			$(this).css({
				"transform" : "scale(-1)",
				"-webkit-transform":"scale(-1)"
			});	
		}).delay(100).fadeOut('slow', function(){
			$(this).removeAttr('style');
		});
	}

	var iPink = function(){
		sound = $f11;	
		playSound();

		$('#eight').stop(true, true).fadeIn('fast', function(){
			$('#nine').fadeIn('fast', function(){
				$('#six').fadeIn('fast', function(){
					$('#eight, #nine, #six').fadeOut();
				});								
			});
		});
	}

	var oSplit = function(){
		sound = $f12;	
		playSound();

		$('#nine, #thirtyseven').stop(true, true).fadeIn('fast', function(){
			$('#nine').delay(500).css({
				"transform" : "scale(2) rotate(-80deg)",
				"-webkit-transform":"scale(2) rotate(-80deg)"
			});	
			$('#thirtyseven').delay(500).css({
				"transform" : "scale(2) rotate(80deg)",
				"-webkit-transform":"scale(2) rotate(80deg)"
			});	
		}).delay(100).fadeOut('slow', function(){
			$(this).removeAttr('style');
		});
	}

	var pFadeIn = function(){
		sound = $f13;	
		playSound();

		$('#ten').stop(true, true).fadeIn('fast', function(){
			$(this).fadeOut('slow');
		});
	}

	var aTanGold = function(){
		sound = $f14;	
		playSound();
	    $('.tan, .gold').stop(true, true).fadeIn().delay(100).fadeOut();
	}

	var sFadeIn = function(){
		sound = $f15;	
		playSound();
	    $('#onehundred24, #fiftyfive, #seventytwo, #onehundred1').stop(true, true).fadeIn().delay(100).fadeOut();
	}

	var dTanDots = function(){
		sound = $f16;	
		playSound();
	    $('#onehundred55').stop(true, true).fadeIn(50, function(){
			$('#onehundred54').fadeIn(50, function(){
				$('#onehundred57').fadeIn(50, function(){
					$('#onehundred44').fadeIn(50, function(){
						$('#onehundred36').fadeIn(50, function(){
							$('#onehundred63').fadeIn(50, function(){
								$('#onehundred64').fadeIn(50, function(){
									$('#onehundred50').fadeIn(50, function(){
										$('#onehundred38').fadeIn(50, function(){
											$('.shape').fadeOut('slow');
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}

	var fZoomOut = function(){
		sound = $f17;	
		playSound();
		$('#fiftytwo, #ninety, #thirteen, #thirtynine').stop(true, true).fadeIn('normal', function(){
			$(this).css({
				"transform" : "scale(0.5)",
				"-webkit-transform":"scale(0.5)"
			});	
		}).delay(500).fadeOut('fast', function(){
			$(this).removeAttr('style');	
		});
	}

	var gBack = function(){
		sound = $f19;	
		playSound();
		$container.css({
	    	"background-color": "#efafa5"
	    });
	}

	var hSmile = function(){
		sound = $f20;	
		playSound();
	    $('#onehundred28').stop(true, true).fadeIn(50, function(){
			$('#onehundred55').fadeIn(50, function(){
				$('#fiftysix').fadeIn(50, function(){
							$('.shape').fadeOut('slow');
					});
				});
			});
	}

	var jFadeIn = function(){
		sound = $f21;	
		playSound();
		$('#twelve').stop(true, true).fadeIn(50, function(){
			$('#fiftythree').fadeIn(50, function(){
				$('#ten').fadeIn(50, function(){
					$('#seventy').fadeIn(50, function(){
						$('#twentyfive').fadeIn(50, function(){
							$('.shape').fadeOut('slow');
						});
					});
				});
			});
		});
	}

	var kJiggle = function(){
		sound = $f24;	
		playSound();
		$('#twentysix, #onehundred30, #onehundred12, #onehundred18').stop(true, true).fadeIn().delay(100).fadeOut();
	}

	var lSplit = function(){
		sound = $f25;	
		playSound();
		$('#seventeen').stop(true, true).fadeIn(50, function(){
			$('#sixteen').fadeIn(50, function(){
				$('#fortynine').fadeIn(50, function(){
					$('#seventeen').css({
						"transform" : "rotate(-5deg)",
						"-webkit-transform":"rotate(-5deg)"
					});	
					$('#sixteen').css({
						"transform" : "rotate(5deg)",
						"-webkit-transform":"rotate(5deg)"
					});	
					$('#fortynine').css({
						"transform" : "otate(5deg)",
						"-webkit-transform":"rotate(5deg)"
					});	
				}).delay(500).fadeOut('slow', function(){
					$('#seventeen, #sixteen, #fortynine').removeAttr('style');
				});
			});

		});
	}

	var zZoom = function(){
		sound = $f26;	
		playSound();
	    $('#one').stop(true, true).fadeIn(50, function(){
			$('#sixtythree').fadeIn(50, function(){
				$('#fiftynine').fadeIn(50, function(){
					$('#fifty').fadeIn(50, function(){
						$('#onehundred58').fadeIn(50, function(){
							$('#fortysix').fadeIn(50, function(){
								$('#one, #sixtythree').css({
									"transform" : "scale(2) rotate(20deg)",
									"-webkit-transform":"scale(2) rotate(20deg)"
								});	
								$('#onehundred58, #fortysix').css({
									"transform" : "scale(2) rotate(-280deg)",
									"-webkit-transform":"scale(2) rotate(-280deg)"
								});
								$('#fiftynine, #fifty, #onehundred58, #fortysix').css({
									"transform" : "scale(2) rotate(-10deg)",
									"-webkit-transform":"scale(2) rotate(-10deg)"
								});
							}).delay(500).fadeOut('slow', function(){
								$('#one, #sixtythree, #fiftynine, #fifty, #onehundred58, #fortysix').removeAttr('style');
							});
						});
					});
				});
			});
		});
	}

	var xSguiggle = function(){
		sound = $f27;	
		playSound();
	    $('#eightyfive, #thirtytwo, #twentytwo').stop(true, true).fadeIn().delay(2000).fadeOut();
	}

	var cSplit = function(){
		sound = $f29;	
		playSound();
	    $('#twenty, #eighteen').stop(true, true).fadeIn('fast', function(){
			$('#twenty').delay(500).css({
				"transform" : "scale(2) rotate(-30deg)",
				"-webkit-transform":"scale(2) rotate(-30deg)"
			});	
			$('#eighteen').delay(500).css({
				"transform" : "scale(2) rotate(30deg)",
				"-webkit-transform":"scale(2) rotate(30deg)"
			});	
		}).delay(100).fadeOut('slow', function(){
			$('#twenty, #eighteen').removeAttr('style');
		});
	}

	var vBack = function(){
		sound = $f31;	
		playSound();
		$container.css({
			"background-color": "#fff100"
		});
	}

	var bBlack = function() {
		sound = $f32;	
		playSound();
	    $('#sixtyfour').stop(true, true).fadeIn(50, function(){
			$('#ninetyone').fadeIn(50, function(){
				$('#ninetythree').fadeIn(50, function(){
					$('#onehundred32').fadeIn(50, function(){
						$('#onehundred33').fadeIn(50, function(){
							$('#onehundred37').fadeIn(50, function(){
								$('#fiftyfive').fadeIn(50, function(){
									$('#eightynine').fadeIn(50, function(){
										$('#onehundred52').fadeIn(50, function(){
											$('.shape').fadeOut('slow');
										});
									});
								});
							});
						});
					});
				});
			});
		});
	}

	var nZoomOut = function(){
		sound = $f33;	
		playSound();
		$('#onehundred13, #onehundred21, #thirtyeight, #seventynine, #seventyeight, #twentynine').stop(true, true).fadeIn('normal', function(){
			$(this).css({
				"transform" : "scale(0.3)",
				"-webkit-transform":"scale(0.3)"
			});	
		}).delay(500).fadeOut('fast', function(){
			$(this).removeAttr('style');	
		});
	}

	var mZoom = function(){
		sound = $f34;	
		playSound();
	    $('#seventythree').stop(true, true).fadeIn(50, function(){
			$('#eightynine').fadeIn(50, function(){
				$('#fourteen').fadeIn(50, function(){
					$('#sixtyseven').fadeIn(50, function(){
						$('#onehundred10').fadeIn(50, function(){
							$('#twentyfour').fadeIn(50, function(){
								$('#seventythree, #eightynine').css({
									"transform" : "scale(2) rotate(20deg)",
									"-webkit-transform":"scale(2) rotate(20deg)"
								});	
								$('#fourteen, #sixtyseven').css({
									"transform" : "scale(2) rotate(-60deg)",
									"-webkit-transform":"scale(2) rotate(-60deg)"
								});
								$('#onehundred10, #twentyfour').css({
									"transform" : "scale(2) rotate(-10deg)",
									"-webkit-transform":"scale(2) rotate(-10deg)"
								});
							}).delay(500).fadeOut('slow', function(){
								$('#seventythree, #eightynine, #fourteen, #sixtyseven, #onehundred10, #twentyfour').removeAttr('style');
							});
						});
					});
				});
			});
		});
	}

	var backDefault =  function(){
		sound = $f36;	
		playSound();
		$container.css({
			"background-color": "#eee"
		});
	}

	//keyboard----------------------->
	function keydown(e) {

		if (e.which >= 65 && e.which <= 90 || e.which === 32) {
			$hint.fadeOut();
		}else {
			//hint doesn't come back!
		}
	  switch(e.which)
		{
	          case 81: //q
	            qZoom();	
	            break;
	          case 87: //w
	            wJiggleZoom();
	            break;
	          case 69: //e
	            eJiggle();
	            break;
	          case 82: //r
	            rFadeIn();
	            break;
	          case 84: //t
	            tSkyAqua();
	            break;
	          case 89: //y
	            ySquiggle();
	            break;
	          case 85: //u
	            uZoomOut();
	            break;
	          case 73: //i
	            iPink();
	            break;
	          case 79: //o
	            oSplit();
	            break;
	          case 80: //p
	            pFadeIn();
	            break;
	          case 65: //a
	          	aTanGold();
	            break;
	          case 83: //s
	          	sFadeIn();
	            break;
	          case 68: //d
	          	dTanDots();
	            break;
	          case 70://f
	            fZoomOut();
	            break;
	          case 71: //g
	            gBack();
	            break;
	          case 72: //h
	          	hSmile();
	            break;
	          case 74: //j
	            jFadeIn();
	            break;
	          case 75: //k
	            kJiggle();
	            break;
	          case 76: //l
	           	lSplit();
	            break;
	          case 90: //z
	          	zZoom();
	            break;
	          case 88: //x
	          	xSguiggle();
	            break;
	          case 67: //c
	          	cSplit();
	            break;
	          case 86: //v
	            vBack();
	            break;
	          case 66: //b
	            bBlack();
	            break;
	          case 78: //n
	            nZoomOut();
	            break;
	          case 77: //m
	          	mZoom();           
	            break;

		case 13: //enter
			backDefault();
			return false;
		  break;

		case 32: //space
			e.preventDefault();
	        backDefault();
	        break;

		default:
			backDefault();
		break;
		}
	}



//
//touch screen------------------------------->
//






	//touch screen references to grid squares
	var $top1 = $('#top1');
	var $top2 = $('#top2');
	var $top3 = $('#top3');
	var $top4 = $('#top4');
	var $top5 = $('#top5');

	var $second1 = $('#second1');
	var $second2 = $('#second2');
	var $second3 = $('#second3');
	var $second4 = $('#second4');
	var $second5 = $('#second5');

	var $third1 = $('#third1');
	var $third2 = $('#third2');
	var $third3 = $('#third3');
	var $third4 = $('#third4');
	var $third5 = $('#third5');

	var $fourth1 = $('#fourth1');
	var $fourth2 = $('#fourth2');
	var $fourth3 = $('#fourth3');
	var $fourth4 = $('#fourth4');
	var $fourth5 = $('#fourth5');

	var $fifth1 = $('#fifth1');
	var $fifth2 = $('#fifth2');
	var $fifth3 = $('#fifth3');
	var $fifth4 = $('#fifth4');
	var $fifth5 = $('#fifth5');


  //
  //  START - Touch "enter" interaction
  //

  var $squares = $('.square'),
      note;

  $squares.bind("touchstart", function(e){
    e.preventDefault();

    showIndication(this);
  });

  document.body.addEventListener("touchmove", function(e){
    var touch = e.changedTouches[0],
        x = touch.clientX,
        y = touch.clientY,
        touched = document.elementFromPoint(x, y);

    if (touched.id != note) {
      note = touched.id;

      if (touched.className == "square") {
        showIndication(touched);
      }
    }
    
  }, false);

  document.body.addEventListener("touchend", function(e){
    $squares.removeClass('active');  
  }, false);

  function showIndication(target){
    var self = this,
      el = $(target),
        attribute = el.data('touch-response'),
        warning = 'Add a data-touch-response attribute',
        data = el.data('touch-response');

    if (data) {
      // play an audio file or call your animation functions from this data. It comes from data attributes on your grid of buttons.
      //console.log(data);

      //console.log(data); // This matches the name of your animation functions
      eval(data + '()'); // This calls the animation function - I hear eval is evil

    } else {
      console.warn(warning);
    }

    $squares.removeClass('active');

    el.addClass('active');
  }

  function clearIndication(){
    $(note).removeClass('active');
    note = "";
  }

  //
  //  END - Touch "enter" interaction
  //



})(window.jQuery);
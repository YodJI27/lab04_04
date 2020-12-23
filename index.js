var canvas = document.getElementById("lab04");
var ctx = canvas.getContext("2d");
var img = new Image;
img.setAttribute( 'crossOrigin', 'Anonymous');
img.onload = function() {
    ctx.drawImage(img, 0, 0);
    var idata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(idata);
    var canvas1 = document.getElementById("lab04_1");
    var ctx1 = canvas1.getContext("2d");
    var h = canvas.height;
    var w = canvas.width;
    var idata1 = ctx1.createImageData(w, h);
    Gy = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
    Gx = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];                  
                                for ( var i=1; i<h-1; i++) {
                                        for ( var j=1; j<w-1; j++) {
                                                var rx =  0;
                                                var gx =  0;
                                                var bx =  0;
                                                                                        
                                                var ry =  0;
                                                var gy =  0;
                                                var by =  0;
                                                                                        
                                                var x = 0;
                                                for ( var m = i-1; m < i+2; m++) {
                                                        var y = 0;
                                                        for ( var k = j-1; k < j+2; k++) {
                                                                rx +=  idata.data[(m*w+k)*4]*Gx[x][y];
                                                                gx +=  idata.data[(m*w+k)*4+1]*Gx[x][y];
                                                                bx +=  idata.data[(m*w+k)*4+2]*Gx[x][y];
        
                                                                ry +=  idata.data[(m*w+k)*4]*Gy[x][y];
                                                                gy +=  idata.data[(m*w+k)*4+1]*Gy[x][y];
                                                                by +=  idata.data[(m*w+k)*4+2]*Gy[x][y];												
                                                                y += 1;
                                                        }
                                                        x += 1;
                                                }
                                                idata1.data[(i*w+j)*4] = Math.sqrt((rx*rx)+(ry*ry));
                                                idata1.data[(i*w+j)*4+1] = Math.sqrt((gx*gx)+(gy*gy));
                                                idata1.data[(i*w+j)*4+2] = Math.sqrt((bx*bx)+(by*by));
                                                idata1.data[(i*w+j)*4+3] = idata.data[(i*w+j)*4+3];
                                        }
                                }
                                ctx1.putImageData(idata1, 0, 0);
                        };
                img.src =  "https://i.imgur.com/Uschheg.jpg";

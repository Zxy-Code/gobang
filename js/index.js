window.onload = function(){
	var qizi = document.getElementsByClassName('xiaokuai');
	var qizi_biaoji,x,y;
	var chusiqizi = true;
	var qizirongqi =[];

	for (var x = 0; x < 10; x++) {
            qizirongqi[x] = [];
            for (var y = 0; y < 10; y++) {
                qizirongqi[x][y] = 0;
            }
    }
	// console.log(qizirongqi)	
	for( var i = 0 ; i < qizi.length ; i++ ){
		qizi[i].index = i;
		qizi[i].onclick = function(){
			// this.style.backgroundColor = "black";
			x = Math.floor(this.index/10);
			y = this.index - x*10;
			if( qizirongqi[x][y] != 0){
				alert('该位置已有棋子');
				return;
			}else{
				if( chusiqizi ){
					this.style.backgroundColor = "black";
					
					x = Math.floor(this.index/10);
					y = this.index - x*10;
					qizirongqi[x][y] = 1;
					qizi_biaoji=1;
					
					chusiqizi = false;
					panduan(x,y,qizi_biaoji);
				}else{
					this.style.backgroundColor = "red";	
					x = Math.floor(this.index/10)
					y = this.index - x*10;
					qizirongqi[x][y] = 2;
					qizi_biaoji=2;
					
					chusiqizi = true;
					panduan(x,y,qizi_biaoji);

				}
			}
			
		}
	}
	function panduan(x,y,qizi_biaoji){
		var num1=0,
			num2=0,
			num3=0,
			num4=0;

		//左右判断
		for( var i = x ; i>=0;i--){
			if(qizirongqi[i][y] != qizi_biaoji){
				break;	
			}
			num1++;
		}
		for( var i = x+1 ; i<10;i++){
			if(qizirongqi[i][y] != qizi_biaoji){
				break;	
			}
			num1++;
		}
		//上下判断
		for( var i = y ; i>=0;i--){
			if(qizirongqi[x][i] != qizi_biaoji){
				break;	
			}
			num2++;
		}
		for( var i = y+1 ; i<10;i++){
			if(qizirongqi[x][i] != qizi_biaoji){
				break;
			}
			num2;
		}
		//左上右下判断
		for( var i = x , j = y ; i>=0, j >=0;i--,j--){
			if(qizirongqi[i][j] != qizi_biaoji){
				break;
			}
			num3++;
		}
		for( var i = x+1 ,j = y+1; i < 10,j <10 ;i++ ,j++){
			if(qizirongqi[i][j] != qizi_biaoji){
				break;	
			}
			num3++;
		}
		//左下右上判断
		for( var i = x , j = y ; i>=0, j < 10;i--,j++){
			if(qizirongqi[i][j] != qizi_biaoji){
				break;	
			}
			num4++;
		}
		for( var i = x+1 ,j = y-1; i < 10,j >=0 ;i++ ,j--){
			if(qizirongqi[i][j] != qizi_biaoji){
				break;	
			}
			num4++;
		}
		if( num1>=5||num2>=5||num3>=5||num4>=5){
			if( qizi_biaoji == 1){
				alert("黑方获胜");
				console.log(num1);

				return;
			}
			if( qizi_biaoji == 2){
				alert("红方获胜");
				return;
			}
			
		}
	}


}
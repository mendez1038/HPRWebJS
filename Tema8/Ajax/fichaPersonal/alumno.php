<?php
header('Content-Type: text/html; charset=utf-8');

   $idAl=$_REQUEST['idAl'];
   
if ($idAl!="") {
    $nomeAl=array("José","Pepe","Fernando","Ana","Iria",
	              "Rogelio","Marina","Dani","Patricia","Iván");
	$dirAl=array("Calle Rosa","Calle Carabel","Calle Pintor","Calle Ruiseñor","Calle Rosalía",
	             "Calle Río Miño","Calle Monte Medo","Calle Pico Sacro","Calle Viñedo","Calle Sacho");
	$telAl=array("667111111","667222222","667333333","667444444","667555555",
	              "667666666","667777777","667888888","6679999999","667000000");		
	
	if ($idAl>10) 
		echo "Error";
	else {
		$salida="Foto=foto".$idAl.".jpg";
		$salida.="-";
		$salida.="Nome: ".$nomeAl[$idAl];
		$salida.="-";
		$salida.="Direccion=".$dirAl[$idAl];
		$salida.="-";
		$salida.="Telefono:".$telAl[$idAl];
		echo $salida;
	}
}

?>

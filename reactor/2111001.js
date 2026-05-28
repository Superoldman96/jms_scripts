/*
	ジャクム召喚
*/

function act() {
	rm.changeMusic("Bgm06/FinalFight");
	rm.spawnZakum();
	rm.mapMessage("火の目の力でジャクムが召喚されます。");
	return true;
}

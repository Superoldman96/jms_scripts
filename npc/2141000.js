// ピンクビーン召喚
// キルストン
var npc_talk_status = -1;
function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				var text = "女神の鏡さえあれば…もう一度暗黒の魔法使いを呼び出すことができる！　…\r\n"
				text += "お、おかしい…どうして暗黒の魔法使いを呼び出さないんだ？　この気はなんだ？　暗黒の魔法使いとは全く違う…ウワアアアッ！\r\n";
				text += "#b(キルストンの肩に手をかける)\r\n";
				return cm.askAcceptDecline(text);
			}
		case 1:
			{
				cm.removeNpc(270050100, 2141000);
				cm.forceStartReactor(270050100, 2709000);
				return cm.dispose();
			}
		default:
			break;
	}

	return cm.dispose();
}
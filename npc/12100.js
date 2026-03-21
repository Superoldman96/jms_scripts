// マイ
// 通常は会話不可

var mapid_list = Array(
	1010100,
	1010200,
	1010300,
	1010400
);

var npc_talk_status = -1;

function action(mode, type, selection) {
	if (mode != 1) {
		return cm.dispose();
	}

	npc_talk_status++;
	switch (npc_talk_status) {
		case 0:
			{
				// BB後, 原文通りだけどマップ名ちゃんとmapidからとったほうが良いかも?
				var text = "基礎を固めたいなら、ここが向いているようだ。どこで修練する？\r\n";
				// getQuestStatus(1041) == 1
				text += "#b#L0#冒険者の修練場1#l\r\n";
				// getQuestStatus(1042) == 1
				text += "#b#L1#冒険者の修練場2#l\r\n";
				// pi.getQuestStatus(1043) == 1
				text += "#b#L2#冒険者の修練場3#l\r\n";
				// pi.getQuestStatus(1044) == 1
				text += "#b#L3#冒険者の修練場4#l\r\n";
				return cm.sendSimple(text);
			}
		case 1: {
			cm.warp(mapid_list[selection], 4);
		}
		default:
			break;
	}

	return cm.dispose();
}

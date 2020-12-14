import img1 from '../assets/img/patch-img/1.png'
import img2 from '../assets/img/patch-img/2.png'
import img3 from '../assets/img/patch-img/3.png'
import img4 from '../assets/img/patch-img/4.png'
import img5 from '../assets/img/patch-img/5.png'
import img6 from '../assets/img/patch-img/6.png'

export const bannerLordService = {
    query,
    getPatchNotes
}

async function query() {
    try {
        const res = await fetch("https://rawg-video-games-database.p.rapidapi.com/games/mount-blade-ii-bannerlord", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "1aea8c2b7emsh186278c3ac0a6d1p1721ecjsn84f25086cfcc",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
            }
        })
        const data = await res.json()
        console.log('data:', data)
        return data
    } catch (err) {
        console.error(err);
    }


}

function getPatchNotes() {
    return [
        {
            src: img1,
            title: 'Hotfix (e1.5.4) & Beta Hotfix (e1.5.5 - 04/12/20)',
            body: `
Fixed an issue with mounted crossbows being unable to reload while standing still. </br>
Fixed a crash that occurred on the multiplayer siege map: Baravenos Encirclement. </br>
Fixed an issue with dead teammate indicator opacity and them not going away. </br>
Fixed the issue of having 100 relations with the village notable in Tevea at the start of the game. </br>
Fixed a crash that occurred when taking a quest from a noble. </br>
Fixed an issue that prevented the 'Draught Animal' quest from being completed. </br>
Fixed the issue of Jawwal Clan skin colour not being according to the initial design. </br>
Fixed a crash that occurred when accepting 'Kidnapped Daughter' quest from Tyl of Kvol. </br>
Fixed the issue with the 'Art of the Trade' quest overriding other open quest dialogues. </br>
Added missing modding tools fixes that were not included in the previous patch. </br>

Known Issues </br>
https://forums.taleworlds.com/index.php?threads/known-issues-updated.401168/

        `
        },
        {
            src: img2,
            title: 'Hotfix (e1.5.4) & Beta Hotfix (e1.5.5 - 27/11/20)',
            body: `
Fixed an issue that caused the escort caravan quest to fail when the main hero helps the quest caravan in question. </br>
Fixed a crash that occurred when pressing quick talk with a notable in a settlement. </br>

Known Issues </br>
https://forums.taleworlds.com/index.php?threads/known-issues-updated.401168/
       
        `
        },
        {
            src: img3,
            title: 'Hotfix (e1.5.4) & Beta Hotfix (e1.5.5 - 25/11/20)',
            body: `
Fixed an issue with mounted crossbows being unable to reload while standing still. </br>
Fixed a crash that occurred on the multiplayer siege map: Baravenos Encirclement. </br>
Fixed an issue with dead teammate indicator opacity and them not going away. </br>
Fixed the issue of having 100 relations with the village notable in Tevea at the start of the game. </br>
Fixed a crash that occurred when taking a quest from a noble.</br>
Fixed an issue that prevented the 'Draught Animal' quest from being completed. </br>
Fixed the issue of Jawwal Clan skin colour not being according to the initial design. </br>
Fixed a crash that occurred when accepting 'Kidnapped Daughter' quest from Tyl of Kvol. </br>
Fixed the issue with the 'Art of the Trade' quest overriding other open quest dialogues. </br>
Added missing modding tools fixes that were not included in the previous patch. </br>
Fixed a crash that occurred due to the Beast Whisperer perk in Scouting skill. </br>
Fixed an issue that allowed the player to invite their siblings to their party even though they had not come of age yet. </br>

Known Issues </br>
https://forums.taleworlds.com/index.php?threads/known-issues-updated.401168/       
        `
        },
        {
            src: img4,
            title: 'Hotfix (e1.5.4) & Beta Hotfix (e1.5.5 - 20/11/20)',
            body: `
Fixed a crash that occurred while loading the last savegame. </br>
Fixed a crash that occurred sometimes after clicking "You are my prisoners now" button in caravan encounter conversations. </br>
Fixed a crash that occurred when starting the Notable Needs Daughter Found quest. </br>
Fixed a crash that occurred when the main hero talked with a disbanding party. </br>
Fixed an issue that caused caravans to drop to 1-2 speed because they were buying too many animals. Now, caravans do not buy more animals than their herd limit. If they have more animals than the limit, they sell excess animals when they enter a town. </br>
Fixed an issue that caused tanneries to stop making any profit and close all over the world after an extended period of time. All workshops are a bit more profitable as well now. </br>
Fixed an issue that stopped kingdom decisions from properly resolving when the player joined the kingdom as a mercenary. </br>
Fixed an issue that blocked the player from entering settlements if peace was declared while the player was besieging a settlement. </br>
Fixed an issue that caused settlement claimant decisions to be cancelled and re-proposed indefinitely. </br>
Fixed a bug that spawned another headman in the tutorial village. </br>

Known Issues </br>
https://forums.taleworlds.com/index.php?threads/known-issues-updated.401168/
        `
        },
        {
            src: img5,
            title: 'Patch Notes e1.5.4',
            body: `
Latest Changes: </br>
Fixed a rare crash that occurred when changing video options. </br>
Fixed a bug that spawned the main hero in an unplayable area after selecting their heir. </br>
Fixed an issue that showed swapped values for "Casualties Inflicted" for a diplomacy war item. </br>
Fixed a rare crash on the multiplayer badges screen. </br>
Fixed an issue that caused party speeds not being updated after leaving an army. </br>
Fixed the issue of Mercenary Guard troops not being listed as an infantry type unit. This also applies to formation choices. </br>
Fixed an issue that led to incorrect templates being used when creating a companion. </br>
Fixed an issue with daily gold change occurring immediately after loading a save file. Now, it is paid only once in a day. </br>
Enabled the 'forfeit' button on the opponent’s turn when playing board games. This indirectly fixes the “stuck” situations when playing board games. </br>
Fixed a crash that was related to column arrangement in multiplayer Captain game mode. </br>
Soldier troops now have new templates which limit their maximum possible age to early 40's. </br>

Known Issues </br>
https://forums.taleworlds.com/index.php?threads/known-issues-updated.40116
        `
        },
        {
            src: img6,
            title: 'Hotfix (e1.5.4) & Beta Hotfix (e1.5.5 - 20/11/20)',
            body: `
Fixed a crash that occurred while loading the last savegame. </br>
Fixed a crash that occurred sometimes after clicking "You are my prisoners now" button in caravan encounter conversations. </br>
Fixed a crash that occurred when starting the Notable Needs Daughter Found quest. </br>
Fixed a crash that occurred when the main hero talked with a disbanding party. </br>
Fixed an issue that caused caravans to drop to 1-2 speed because they were buying too many animals. Now, caravans do not buy more animals than their herd limit. If they have more animals than the limit, they sell excess animals when they enter a town. </br>
Fixed an issue that caused tanneries to stop making any profit and close all over the world after an extended period of time. All workshops are a bit more profitable as well now. </br>
Fixed an issue that stopped kingdom decisions from properly resolving when the player joined the kingdom as a mercenary. </br>
Fixed an issue that blocked the player from entering settlements if peace was declared while the player was besieging a settlement. </br>
Fixed an issue that caused settlement claimant decisions to be cancelled and re-proposed indefinitely. </br>
Fixed a bug that spawned another headman in the tutorial village. </br>

Known Issues </br>
https://forums.taleworlds.com/index.php?threads/known-issues-updated.401168/

        `
        }
    ]
}
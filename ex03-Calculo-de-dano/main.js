const fighter = prompt('Nome do seu Guerreiro:  ')
const attackPower = Number(prompt(`Poder de ataque do ${fighter}`));

const defender = prompt('Nome do defensor:  ')
const defensePower = Number(prompt(`Poder de defensa do ${defender}`))
let lifeDefender = Number(prompt(`Total de vida do ${defender}: `));
const isShield = confirm(`Colocar um escudo no defensor.`);

const shield = isShield === true? 'Possui': 'Não possui'
let damage = 0;

if((attackPower > defensePower) && !isShield) {
    damage = attackPower - defensePower;
} else if((attackPower > defensePower) && isShield) {
    damage = (attackPower - defensePower) / 2;
}

lifeDefender -= damage

alert(
    `Resultado Final

    Dano causado: ${damage}

    Guereriro ${fighter}:
    Ataque: ${attackPower}.

    Defensor ${defender}:
    Vida: ${lifeDefender}.
    Defesa: ${defensePower}.
    Escudo: ${shield}
    `
)
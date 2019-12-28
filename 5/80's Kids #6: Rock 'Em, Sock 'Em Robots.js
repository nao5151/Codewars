// https://www.codewars.com/kata/566b490c8b164e03f8000002/

class Robot {
  constructor(data, tactics) {
    this.name = data.name;
    this.health = data.health;
    this.speed = data.speed;
    this.tactics = data.tactics;
    this.tacticsValue = tactics;
  }
  
  get isDown() {
    return this.health <= 0;
  }
  
  get hasTactics() {
    return this.tactics.length > 0;
  }
  
  atack(robot) {
    const tactic = this.tactics.shift();
    robot.health -= this.tacticsValue[tactic];
  }
}

function canFight(robots) {
  return robots.some(robot => robot.hasTactics);
}

function fight(robot1, robot2, tactics) {
  const robots = [
    new Robot(robot1, tactics),
    new Robot(robot2, tactics),
  ].sort((a, b) => b.speed - a.speed);
  let [atacker, defender] = robots;
  
  while (canFight(robots)) {
    atacker.atack(defender);
    if (defender.isDown) {
      break;
    }
    if (defender.hasTactics) {
      [atacker, defender] = [defender, atacker];
    }
  }
  
  if (robots[0].health === robots[1].health) {
    return 'The fight was a draw.';
  } else {
    const winner = robots[0].health > robots[1].health ? robots[0] : robots[1];
    return `${winner.name} has won the fight.`;
  }
}

function solution(quiz) {

  return quiz.map((n) => {

    const [evaluation, answer] = n.split(" = ");

    return eval(evaluation) === Number(answer) ? "O" : "X";
  });
}

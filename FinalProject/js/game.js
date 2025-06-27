document.getElementById('quizForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const answers = [
    document.querySelector('input[name="q1"]:checked').value,
    document.querySelector('input[name="q2"]:checked').value,
    document.querySelector('input[name="q3"]:checked').value,
  ];

  const scores = { homestay: 0, guesthouse: 0, beach: 0 };

  answers.forEach(ans => scores[ans]++);

  let match = 'homestay';
  if (scores.guesthouse > scores.homestay && scores.guesthouse > scores.beach) {
    match = 'guesthouse';
  } else if (scores.beach > scores.homestay && scores.beach > scores.guesthouse) {
    match = 'beach';
  }

  const resultContent = document.getElementById('resultContent');

  let html = '';
  if (match === 'homestay') {
    html = `
      <img src="images/homestay.jpg" alt="Homestay" style="width:100%; max-width:300px;">
      <p><strong>Traditional Homestay:</strong> You're a culture-seeker who values real connections and authentic experiences. Sharing meals, laughs, and stories with a host family is your kind of stay.</p>
    `;
  } else if (match === 'guesthouse') {
    html = `
      <img src="images/guesthouse.jpg" alt="Guesthouse" style="width:100%; max-width:300px;">
      <p><strong>Island Guesthouse:</strong> You enjoy comfort, access to town life, and modern convenience. A great blend of hospitality and independence awaits you in a cozy guesthouse.</p>
    `;
  } else {
    html = `
      <img src="images/beachlodge.jpg" alt="Beach Lodge" style="width:100%; max-width:300px;">
      <p><strong>Eco Beach Lodge:</strong> You crave nature, peace, and ocean vibes. Fall asleep to waves and rise with the sun — your paradise is on the shore.</p>
    `;
  }

  resultContent.innerHTML = html;
  document.getElementById('result').style.display = 'block';
});

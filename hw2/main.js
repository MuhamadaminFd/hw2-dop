document.getElementById('getDataButton').addEventListener('click', fetchData);

document.getElementById('userIdInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        fetchData();
    }
});

function fetchData() {
    let userId = document.getElementById('userIdInput').value;

    if (userId === '' || isNaN(userId) || userId < 1 || userId > 10) {
        alert(' введите число от 1 до 10');
        return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            let userDataElement = document.getElementById('userData');
            userDataElement.innerHTML = `
                <p>Name: ${data.name}</p>
                <p>Username: ${data.username}</p>
                <p>Phone: ${data.phone}</p>
            `;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Произошла ошибка');
        });
}

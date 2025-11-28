    // pega todos os cards .antena
    const antenas = document.querySelectorAll('.antena');

    antenas.forEach(card => {
        card.addEventListener('click', () => {
            
            // nome da antena
            const nomeAntena = card.querySelector('h3').innerText;

            // insere o conteúdo do modal (SEU HTML)
            document.getElementById('conteudoDinamico').innerHTML = `
                <div class="antena1">
                    <img src="icons/antenna_rfid_on.png">
                    <p>${nomeAntena}</p>
                </div>

                <!-- COLE AQUI TODO SEU MODAL ORIGINAL -->

            `;

            // abre o modal
            document.getElementById('modalAntena').style.display = 'flex';
        });
    });

    function fecharModal() {
        document.getElementById('modalAntena').style.display = 'none';
    }


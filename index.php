<?php
include_once("config/conexao.php");

// Buscar todas as áreas
$sqlAreas = "SELECT * FROM areas";
$areas = $conexao->query($sqlAreas);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="app/style/style.css">
    <title>Leituras RFID</title>
</head>
<body>

<div class="nav">
    <h1>LEITURAS TAGS</h1>
</div>

<div class="container">

<?php while($area = $areas->fetch_assoc()): ?>
    
    <div class="area">
        <h4 class="titulo"><?= $area['nome'] ?></h4>
    </div>

    <div class="antenas">

    <?php
        $id_area = $area['id_area'];
        $sqlAnt = "SELECT * FROM antenas WHERE id_area = $id_area";
        $antenas = $conexao->query($sqlAnt);
    ?>

    <?php while($ant = $antenas->fetch_assoc()): ?>

        <?php
            // Buscar leituras recentes
            $id_antena = $ant['id_antena'];
            $sqlLeit = "
                SELECT tag, tempo_segundos 
                FROM leituras 
                WHERE id_antena = $id_antena 
                ORDER BY id_leitura DESC 
                LIMIT 4
            ";
            $leituras = $conexao->query($sqlLeit);
        ?>

        <div class="antena <?= $ant['status'] ?>">

            <div class="topo<?= $ant['status']=='off' ? '-off' : '' ?>">
                <img src="app/icons/antenna_rfid_<?= $ant['status'] ?>.png">
                <h3><?= $ant['nome'] ?></h3>
            </div>

            <div class="total-leitura<?= $ant['status']=='off' ? '-off' : '' ?>">
                <h1>Total Leitura</h1>
                <h2><?= $ant['total_leituras'] ?></h2>
            </div>

            <div class="meios<?= $ant['status']=='off' ? '-off' : '' ?>">
                <div class="meio1<?= $ant['status']=='off' ? '-off' : '' ?>">
                    <p class="label">Ultima leitura</p>
                    <h2><?= $ant['ultima_leitura'] ?>s</h2>
                </div>

                <div class="meio2<?= $ant['status']=='off' ? '-off' : '' ?>">
                    <p class="label">Últimos 60s</p>
                    <h2><?= $ant['ultimos_60s'] ?></h2>
                </div>
            </div>

            <div class="leituras<?= $ant['status']=='off' ? '-off' : '' ?>">
                <h2>Leituras Recentes</h2>
                <table>

                    <?php while($l = $leituras->fetch_assoc()): ?>
                        <tr>
                            <td><?= $l['tag'] ?></td>
                            <td><?= $l['tempo_segundos'] ?>s</td>
                        </tr>
                    <?php endwhile; ?>

                </table>
            </div>

        </div>

    <?php endwhile; ?>

    </div>

<?php endwhile; ?>

</div>

</body>
</html>

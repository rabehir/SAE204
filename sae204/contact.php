<?php include 'includes/header.php'; ?>
<section class="contact">
    <div class="container">
        <h2>Contactez-moi</h2>
        <form action="contact.php" method="post">
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required>

            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message :</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit" class="btn">Envoyer</button>
        </form>
    </div>
</section>
<?php include 'includes/footer.php'; ?>

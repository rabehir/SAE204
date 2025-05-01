<?php include 'includes/header.php'; ?>

<!-- Section Accueil -->
<section class="hero" id="hero">
    <div class="container">
        <h2>Bienvenue, je suis Rassim RABEHI</h2>
        <p>Je suis un étudiant passionné de développement web. Actuellement en 1ère année de BUT MMI à l'IUT1 de Grenoble, voici mon site personnel où je présente mon profil professionnel et mes projets.</p>
        <a href="assets/cv.pdf" class="btn" download>Télécharger mon CV</a>
        <a href="https://www.linkedin.com/in/rassim-rabehi-b4675733a" target="_blank" class="btn">LinkedIn</a>
    </div>
</section>

<!-- Section À propos -->
<section class="bubbles" id="apropos">
    <div class="container">
        <h2>À propos de moi</h2>
        <div class="bubble-grid">
            <div class="bubble">
                <h3>🎓 Parcours scolaire</h3>
                <p>BUT Réseaux & Télécoms - IUT1 Grenoble (2023-2024)</p>
                <p>BUT Métiers du Multimédia & Internet - IUT1 Grenoble (2024-2025)</p>
            </div>
            <div class="bubble">
                <h3>💡 Compétences</h3>
                <div class="skills">
                    <span class="skill-badge">HTML</span>
                    <span class="skill-badge">CSS</span>
                    <span class="skill-badge">JavaScript</span>
                    <span class="skill-badge">PHP</span>
                    <span class="skill-badge">MySQL</span>
                    <span class="skill-badge">Figma</span>
                    <span class="skill-badge">Premiere Pro</span>
                    <span class="skill-badge">Git</span>
                    <span class="skill-badge">UX/UI</span>
                </div>
            </div>
            <div class="bubble">
                <h3>🎯 Objectifs pro</h3>
                <p>Mon objectif est de devenir développeur web indépendant, en créant des interfaces modernes, accessibles et performantes. Je souhaite évoluer dans des projets variés et innovants.</p>
            </div>
        </div>
    </div>
</section>

<!-- Section Réalisations -->
<section class="realisations" id="realisations">
    <div class="container">
        <h2>💼 Mes réalisations</h2>
        <div class="realisations-grid">
            <div class="realisation-card">
                <img src="assets/img/projet1.jpg" alt="Projet 1">
                <div class="realisation-info">
                    <h3>Site vitrine</h3>
                    <p>Un site vitrine développé en HTML/CSS pour une marque fictive. Responsive design et accessibilité.</p>
                    <a href="#" class="btn" target="_blank">Voir le projet</a>
                </div>
            </div>
            <div class="realisation-card">
                <img src="assets/img/projet2.jpg" alt="Projet 2">
                <div class="realisation-info">
                    <h3>Site PHP dynamique</h3>
                    <p>Site dynamique avec base de données (CRUD, login sécurisé) – SAE 203.</p>
                    <a href="#" class="btn" target="_blank">Voir le projet</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="contact" id="contact">
    <div class="container">
        <h2>📩 Contactez-moi</h2>
        <form action="contact.php" method="post" class="contact-form">
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

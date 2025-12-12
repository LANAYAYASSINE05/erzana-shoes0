================================================================================
                    ERZANA SHOES - THEME SHOPIFY
================================================================================

DESCRIPTION
-----------
Ce projet est un thème Shopify personnalisé pour la boutique Erzana Shoes.
Le thème est développé avec Liquid, JavaScript, et CSS pour créer une
expérience d'achat moderne et responsive.

STRUCTURE DU PROJET
--------------------

assets/
  Contient tous les fichiers statiques du thème :
  - Fichiers JavaScript (.js) pour les fonctionnalités interactives
  - Fichiers CSS (.css) pour le style
  - Fichiers SVG pour les icônes
  - Configuration TypeScript (global.d.ts, jsconfig.json)

blocks/
  Contient les blocs Liquid réutilisables (87 fichiers .liquid)
  Utilisés pour construire les sections de la boutique

config/
  - settings_data.json : Configuration actuelle du thème
  - settings_schema.json : Schéma de configuration du thème

layout/
  - theme.liquid : Layout principal du thème
  - password.liquid : Layout pour les pages protégées par mot de passe

locales/
  Fichiers de traduction pour plusieurs langues :
  - en.default.json : Anglais (par défaut)
  - fr.json : Français
  - de.json : Allemand
  - es.json : Espagnol
  - et autres langues...

sections/
  Sections Liquid personnalisables (36 fichiers)
  Chaque section peut être ajoutée/modifiée via l'éditeur de thème Shopify

snippets/
  Snippets Liquid réutilisables (111 fichiers)
  Composants réutilisables pour les pages

templates/
  Templates de pages (13 fichiers) :
  - index.json : Page d'accueil
  - product.json : Page produit
  - collection.json : Page collection
  - cart.json : Page panier
  - blog.json, article.json : Pages blog
  - Et autres...

FONCTIONNALITÉS PRINCIPALES
----------------------------

- Design responsive (mobile, tablette, desktop)
- Panier drawer (panier latéral)
- Recherche prédictive
- Galerie de médias produits
- Sélecteur de variantes
- Gestion des inventaires
- Support multi-langues
- Optimisations de performance
- Accessibilité (a11y)

INSTALLATION
------------

1. Télécharger le thème depuis Shopify Admin :
   Online Store > Themes > Upload theme

2. Ou utiliser Shopify CLI :
   shopify theme push

3. Activer le thème dans Shopify Admin

DÉVELOPPEMENT
-------------

Pour développer localement :

1. Installer Shopify CLI :
   npm install -g @shopify/cli @shopify/theme

2. Se connecter à votre boutique :
   shopify auth login

3. Démarrer le serveur de développement :
   shopify theme dev

4. Prévisualiser les changements en temps réel

CONFIGURATION
-------------

Les paramètres du thème peuvent être modifiés via :
- Shopify Admin > Online Store > Themes > Customize
- Ou directement dans config/settings_data.json

PRINCIPAUX PARAMÈTRES
---------------------

- Logo et hauteur du logo
- Polices (Inter, Barlow)
- Schémas de couleurs (4 schémas disponibles)
- Largeur de page
- Type de panier (drawer)
- Rayons de bordure des boutons
- Et bien plus...

FICHIERS IMPORTANTS
-------------------

- layout/theme.liquid : Structure HTML principale
- assets/base.css : Styles de base
- assets/header.js : Navigation principale
- assets/cart-drawer.js : Gestion du panier
- assets/product-form.js : Formulaire d'ajout au panier
- assets/variant-picker.js : Sélection de variantes

SUPPORT MULTI-LANGUE
--------------------

Le thème supporte de nombreuses langues. Les traductions sont dans
le dossier locales/. Pour ajouter/modifier des traductions, éditez
les fichiers JSON correspondants.

NOTES
-----

- Ce thème utilise Liquid 2.0
- Compatible avec les dernières fonctionnalités Shopify
- Optimisé pour les performances
- Respecte les standards d'accessibilité web

VERSION
-------

Thème Shopify personnalisé pour Erzana Shoes
Dernière mise à jour : 2024

CONFIGURATION DES COLLECTIONS
------------------------------

Collections à créer dans Shopify Admin
---------------------------------------

Collections configurées dans le menu automatique (ordre d'affichage) :

1. Bottes & Bottines
   - Handle: bottes-bottines
   - URL: /collections/bottes-bottines

2. Chaussures de Ville
   - Handle: chaussures-de-ville
   - URL: /collections/chaussures-de-ville

3. Chaussures Classiques
   - Handle: chaussures-classiques
   - URL: /collections/chaussures-classiques

4. Chaussures Confort
   - Handle: chaussures-confort
   - URL: /collections/chaussures-confort

Note : Le menu affiche automatiquement les titres réels des collections depuis
       Shopify. Seules les collections existantes seront affichées dans le menu.

Configuration du Menu de Navigation
------------------------------------

CONFIGURATION AUTOMATIQUE DANS LES FICHIERS
--------------------------------------------

Le menu de navigation est configuré directement dans les fichiers du thème,
sans passer par Shopify Admin. Les collections sont automatiquement détectées
et affichées dans le menu.

Fichiers concernés :
- snippets/collections-menu-auto.liquid : Génère automatiquement le menu
- snippets/header-menu.liquid : Utilise le menu auto si aucun menu n'est configuré
- sections/header-group.json : Configuration du header

Comment ça fonctionne :
1. Le snippet collections-menu-auto.liquid contient les handles des 6 collections
2. Si aucun menu n'est configuré dans Shopify Admin, le menu automatique est utilisé
3. Les collections sont affichées dans l'ordre défini dans le snippet

Pour modifier les collections affichées :
1. Éditez snippets/collections-menu-auto.liquid
2. Modifiez la ligne 7 avec les handles (ordre d'affichage) :
   assign collection_handles = 'bottes-bottines,chaussures-de-ville,...'
3. Les titres sont automatiquement récupérés depuis Shopify (collection.title)
4. Seules les collections existantes dans Shopify seront affichées

CRÉATION DES COLLECTIONS DANS SHOPIFY ADMIN
-------------------------------------------

Vous devez créer les 6 collections dans Shopify Admin avec les handles exacts :

1. Allez dans Shopify Admin > Produits > Collections
2. Créez chaque collection avec le handle exact indiqué ci-dessus
3. Le menu s'affichera automatiquement une fois les collections créées

Note : Le menu fonctionne automatiquement même si vous ne créez pas de menu
       dans Shopify Admin > Navigation. Le code détecte les collections et
       les affiche automatiquement.

Fichiers Modifiés
------------------

Les fichiers suivants ont été mis à jour pour utiliser ces collections :

- templates/index.json : Page d'accueil avec section de collections
- templates/list-collections.json : Page listant toutes les collections (limité à 6)
- config/settings_data.json : Schéma de couleurs mis à jour (blanc, noir, or #D4AF37)
- snippets/collections-menu-auto.liquid : Menu automatique avec les 6 collections (NOUVEAU)
- snippets/header-menu.liquid : Détection automatique des collections (MODIFIÉ)

Couleurs du Thème
------------------

Le thème utilise maintenant les couleurs suivantes :
- Blanc : #FFFFFF (arrière-plan principal)
- Noir : #000000 (texte principal, bordures)
- Or : #D4AF37 (couleur d'accent, boutons principaux)

Ces couleurs sont appliquées dans le schéma de couleurs scheme-1.

Notes Importantes
------------------

- Les handles de collections doivent correspondre exactement à ceux indiqués ci-dessus
- Si vous modifiez les handles, vous devrez mettre à jour :
  * snippets/collections-menu-auto.liquid (ligne 7)
  * templates/index.json (référence à la collection principale)
- La page d'accueil affiche automatiquement les 6 collections une fois qu'elles
  sont créées
- La page /collections affichera les 6 collections en grille
- Le menu de navigation s'affiche automatiquement sans configuration dans Shopify Admin
- Pour désactiver le menu automatique, configurez un menu dans Shopify Admin > Navigation

Vérification
-------------

Après avoir créé les collections et configuré le menu :
1. Vérifiez que toutes les collections apparaissent dans le menu de navigation
2. Vérifiez que la page d'accueil affiche la section "Nos Collections"
3. Vérifiez que chaque collection affiche correctement ses produits
4. Vérifiez que les couleurs (blanc, noir, or) sont bien appliquées

RÉSOLUTIONS D'IMAGES RECOMMANDÉES
==================================

Pour une présentation optimale des images dans le thème, utilisez les résolutions
suivantes selon le type d'image :

HERO BANNER (Section Hero - Page d'accueil)
--------------------------------------------

Desktop (Ordinateur) :
- Résolution recommandée : 3840 x 2160 pixels (4K)
- Résolution minimale : 1920 x 1080 pixels (Full HD)
- Format : JPG ou WebP
- Ratio d'aspect : 16:9 (recommandé) ou adapté au design
- Taille de fichier : < 500 KB (optimisé)
- Largeur maximale supportée : 3840px

Mobile (Téléphone) :
- Résolution recommandée : 1600 x 900 pixels
- Résolution minimale : 800 x 450 pixels
- Format : JPG ou WebP
- Ratio d'aspect : 16:9 ou adapté
- Taille de fichier : < 200 KB (optimisé)
- Largeur maximale supportée : 1600px

Note : Le thème génère automatiquement plusieurs tailles (832, 1200, 1600, 1920, 
       2560, 3840px) pour le responsive. Utilisez toujours la plus haute résolution
       disponible, Shopify optimisera automatiquement.

IMAGES DE PRODUITS
------------------

Images principales de produits :
- Résolution recommandée : 2048 x 2048 pixels (carré)
- Résolution minimale : 1024 x 1024 pixels
- Format : JPG (qualité 85-90%) ou WebP
- Ratio d'aspect : 1:1 (carré) - RECOMMANDÉ
- Taille de fichier : < 300 KB par image
- Fond : Blanc ou transparent (PNG)

Images secondaires/variantes :
- Résolution recommandée : 2048 x 2048 pixels
- Format : JPG ou WebP
- Ratio d'aspect : 1:1 (carré)

Note : Shopify génère automatiquement plusieurs tailles pour les images produits.
       Utilisez toujours des images carrées pour une meilleure cohérence visuelle.

IMAGES DE COLLECTIONS
---------------------

Images de collection (page d'accueil, liste collections) :
- Résolution recommandée : 1920 x 1920 pixels (carré)
- Résolution minimale : 1200 x 1200 pixels
- Format : JPG (qualité 85-90%) ou WebP
- Ratio d'aspect : 1:1 (carré) - RECOMMANDÉ
- Taille de fichier : < 400 KB
- Fond : Cohérent avec le design de la collection

Note : Les images de collections sont affichées en grille, utilisez un ratio carré
       pour une présentation uniforme.

LOGO
----

Logo du site (header) :
- Résolution recommandée : 800 x 200 pixels (format horizontal)
- Résolution minimale : 400 x 100 pixels
- Format : PNG (avec transparence) ou SVG (recommandé)
- Ratio d'aspect : Variable selon le design (généralement 4:1 ou 3:1)
- Taille de fichier : < 100 KB
- Fond : Transparent (PNG) ou vectoriel (SVG)

Note : Le logo est redimensionné automatiquement selon les paramètres du thème.
       Utilisez SVG pour une qualité parfaite à toutes les tailles.

IMAGES DE SECTIONS (Media with Content)
---------------------------------------

Images pour sections "Media with Content" :
- Résolution recommandée : 1920 x 1080 pixels (16:9)
- Résolution minimale : 1200 x 675 pixels
- Format : JPG (qualité 85-90%) ou WebP
- Ratio d'aspect : 16:9 (recommandé) ou adapté
- Taille de fichier : < 400 KB

BONNES PRATIQUES
----------------

1. OPTIMISATION DES IMAGES :
   - Compressez toujours vos images avant l'upload
   - Utilisez des outils comme TinyPNG, ImageOptim, ou Squoosh
   - Format WebP recommandé pour une meilleure compression

2. RATIO D'ASPECT :
   - Produits : TOUJOURS 1:1 (carré)
   - Collections : 1:1 (carré) recommandé
   - Hero banners : 16:9 ou adapté au design
   - Sections : 16:9 ou adapté

3. QUALITÉ :
   - JPG : Qualité 85-90% (bon équilibre qualité/taille)
   - PNG : Utilisez uniquement si transparence nécessaire
   - WebP : Meilleur format moderne (compression supérieure)

4. NOMENCLATURE :
   - Utilisez des noms descriptifs : "botte-noire-cuir-01.jpg"
   - Évitez les espaces, utilisez des tirets
   - Incluez des mots-clés pertinents

5. ALT TEXT (Texte alternatif) :
   - Ajoutez toujours un texte alternatif descriptif
   - Important pour l'accessibilité et le SEO
   - Exemple : "Botte en cuir noir Erzana - Collection Hiver 2024"

6. ORDRE DES IMAGES :
   - Images produits : La meilleure image en première position
   - Collections : Image représentative de la collection

RÉSUMÉ DES RÉSOLUTIONS
----------------------

Type d'image              | Desktop          | Mobile           | Format
--------------------------|------------------|------------------|--------
Hero Banner               | 3840 x 2160 px   | 1600 x 900 px    | JPG/WebP
Image Produit             | 2048 x 2048 px   | 2048 x 2048 px   | JPG/WebP
Image Collection          | 1920 x 1920 px   | 1920 x 1920 px   | JPG/WebP
Logo                      | 800 x 200 px     | 400 x 100 px     | SVG/PNG
Section Media             | 1920 x 1080 px   | 1200 x 675 px    | JPG/WebP

Note importante : Shopify génère automatiquement plusieurs tailles pour chaque
image uploadée. Utilisez toujours la résolution maximale recommandée, le système
sélectionnera automatiquement la meilleure taille selon l'appareil.

================================================================================

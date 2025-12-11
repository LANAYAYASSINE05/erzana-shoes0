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

================================================================================

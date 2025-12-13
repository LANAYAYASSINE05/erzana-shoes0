# Guide des Résolutions d'Images - ERZANA SHOES

Ce document détaille toutes les résolutions d'images recommandées pour le thème ERZANA SHOES, conformément aux spécifications du README.md.

## 📐 Résolutions Recommandées par Type d'Image

### 1. **Logos**

#### Logo Principal (`Logo.png`)
- **Format** : PNG avec transparence
- **Résolution recommandée** : 
  - **Desktop** : 400-600px de largeur (ratio 2:1 à 3:1)
  - **Mobile** : 200-300px de largeur
  - **Hauteur configurée** : 40px (desktop) / 30px (mobile) dans les paramètres du thème
- **Usage** : Header principal, pages standards
- **Fichier** : `assets/Logo.png`

#### Logo Inverse (`Logo inverse.png`)
- **Format** : PNG avec transparence
- **Résolution recommandée** : 
  - **Desktop** : 400-600px de largeur (ratio 2:1 à 3:1)
  - **Mobile** : 200-300px de largeur
  - **Hauteur configurée** : 40px (desktop) / 30px (mobile) dans les paramètres du thème
- **Usage** : Headers transparents, fonds sombres, après scroll
- **Fichier** : `assets/Logo inverse.png`

### 2. **Images de Produits (Chaussures)**

#### Images Principales de Produit
- **Format** : JPG ou WebP (haute qualité)
- **Résolution minimale** : **2000px de largeur** (comme spécifié dans le README)
- **Résolution optimale** : **3840px de largeur** (4K)
- **Résolutions multiples générées automatiquement** :
  - 240px (miniatures)
  - 352px (mobile)
  - 832px (tablette)
  - 1200px (desktop standard)
  - 1600px (desktop large)
  - 1920px (Full HD)
  - 2560px (2K)
  - 3840px (4K - résolution maximale)
- **Ratio recommandé** : Portrait (3:4) ou Square (1:1) pour les chaussures
- **Qualité** : Minimum 90% pour JPG, 85% pour WebP
- **Usage** : Galeries produits, pages produit, zoom

#### Images de Variantes (Couleurs, Tailles)
- **Résolution minimale** : 1000px de largeur
- **Résolution optimale** : 2000px de largeur
- **Format** : JPG ou WebP
- **Usage** : Swatches, sélecteurs de variantes

#### Miniatures de Produits (Grilles, Collections)
- **Résolution** : 500-800px de largeur
- **Format** : JPG ou WebP (optimisé)
- **Usage** : Cartes produits, grilles de collections

### 3. **Images de Bannières Hero**

#### Bannières Hero Section
- **Résolution minimale** : 1920px de largeur
- **Résolution optimale** : 3840px de largeur (4K)
- **Format** : JPG haute qualité ou WebP
- **Ratio recommandé** : Landscape (16:9) ou Ultra-wide (21:9)
- **Usage** : Sections hero, bannières principales

#### Bannières Hero Mobile
- **Résolution** : 1200px de largeur minimum
- **Format** : JPG ou WebP optimisé
- **Usage** : Affichage mobile des bannières

### 4. **Images de Contenu (Media with Content)**

#### Images de Présentation Produits
- **Résolution minimale** : 2000px de largeur
- **Résolution optimale** : 2560px de largeur
- **Format** : JPG haute qualité ou WebP
- **Usage** : Sections "Media with Content", présentation artisanale

### 5. **Images de Collection**

#### Images de Collection
- **Résolution minimale** : 1500px de largeur
- **Résolution optimale** : 2000px de largeur
- **Format** : JPG ou WebP
- **Usage** : Pages de collection, catalogues

### 6. **Favicon**

#### Favicon
- **Résolution** : 32x32px (standard)
- **Format** : PNG ou ICO
- **Usage** : Onglet navigateur, favoris
- **Fichier** : Configuré via `settings.favicon`

### 7. **Images de Témoignages et Certifications**

#### Images de Certifications
- **Résolution** : 800-1200px de largeur
- **Format** : PNG avec transparence (pour logos) ou JPG
- **Usage** : Badges qualité, certifications artisanales

### 8. **Vidéos de Présentation**

#### Vidéos Produits
- **Résolution minimale** : 1920x1080 (Full HD)
- **Résolution optimale** : 3840x2160 (4K)
- **Format** : MP4 (H.264) ou WebM
- **Image de prévisualisation** : 3840px de largeur
- **Usage** : Présentation produits, qualité des matériaux

## 🎨 Recommandations Spécifiques pour Chaussures de Luxe

### Images Produits - Détails Artisanaux
- **Mise en avant des détails** : 
  - Cuir premium : 2000px minimum
  - Finitions : 2000px minimum
  - Semelles : 2000px minimum
- **Angles recommandés** :
  - Vue de face : Obligatoire
  - Vue de profil : Recommandée
  - Vue de dessus : Recommandée
  - Détails (coutures, finitions) : Fortement recommandée

### Espace Blanc et Design Épuré
- Privilégier des images avec beaucoup d'espace blanc autour des produits
- Ratio d'espace : Minimum 30% d'espace blanc autour de la chaussure
- Fond : Blanc (#FFFFFF) ou très clair pour mettre en valeur chaque paire

### Zoom et Vue 360°
- **Images haute résolution essentielles** : 3840px pour permettre un zoom optimal
- Support de la vue 360° : Images multiples à 2000px minimum par angle

## 📱 Responsive Design

### Breakpoints Shopify Standard
- **Mobile** : < 750px
- **Tablette** : 750px - 989px
- **Desktop** : 990px - 1199px
- **Large Desktop** : ≥ 1200px

### Optimisation par Device
- **Mobile** : Images 500-800px de largeur
- **Tablette** : Images 1000-1200px de largeur
- **Desktop** : Images 1600-2000px de largeur
- **Large Desktop** : Images 2560-3840px de largeur

## ⚙️ Configuration Technique

### Paramètres du Thème
Les résolutions sont gérées automatiquement par Shopify via le système `image_url` avec les paramètres suivants :

```liquid
widths: '240, 352, 832, 1200, 1600, 1920, 2560, 3840'
```

### Compression et Optimisation
- **JPG** : Qualité 85-90% (équilibre qualité/taille)
- **WebP** : Qualité 85% (meilleure compression)
- **PNG** : Utilisé uniquement pour logos et images avec transparence

## ✅ Checklist de Vérification

Avant d'uploader des images, vérifiez :

- [ ] Images produits : Minimum 2000px de largeur
- [ ] Logos : 400-600px de largeur, format PNG
- [ ] Bannières hero : 1920px minimum, 3840px recommandé
- [ ] Toutes les images sont optimisées (compression appropriée)
- [ ] Format adapté au contenu (JPG pour photos, PNG pour logos)
- [ ] Espace blanc suffisant autour des produits
- [ ] Images de détails artisanaux : 2000px minimum
- [ ] Vidéos : Full HD minimum, 4K recommandé

## 📝 Notes Importantes

1. **Shopify génère automatiquement** toutes les tailles nécessaires à partir de l'image source
2. **Toujours uploader la plus haute résolution** disponible (minimum 2000px pour produits)
3. **Les images sont optimisées automatiquement** par Shopify CDN
4. **Le lazy loading** est activé pour améliorer les performances
5. **Le format WebP** est automatiquement servi aux navigateurs compatibles

---

*Document créé pour ERZANA SHOES - Thème Shopify pour Boutique de Chaussures de Luxe*


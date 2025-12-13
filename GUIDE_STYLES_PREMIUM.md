# Guide d'Utilisation - Styles Premium pour Sections Newsletter et Promotionnelles

Ce guide explique comment utiliser les nouveaux styles premium pour les sections newsletter et promotionnelles d'Erzana Shoes.

## 🎨 Styles Disponibles

### 1. Application Automatique

Les styles premium s'appliquent **automatiquement** aux sections contenant un bloc newsletter (`.email-signup-block`). 

**Aucune action requise** - Les sections newsletter utilisent désormais :
- Fond blanc (#FFFFFF) au lieu du gris clair
- Texte en noir (#000000)
- Boutons avec contour OR (#D4AF37)
- Hiérarchie typographique améliorée (uppercase, letter-spacing)

### 2. Classes Manuelles (Optionnel)

Si vous souhaitez appliquer les styles manuellement à d'autres sections, vous pouvez ajouter ces classes dans l'éditeur de thème Shopify :

#### Fond Blanc Premium
```html
Ajoutez la classe : premium-section-white
```

**Résultat** :
- Fond blanc (#FFFFFF)
- Texte en noir
- Boutons avec contour OR (bordure OR, fond transparent)
- Hover : fond OR + texte noir

#### Fond Noir Premium
```html
Ajoutez la classe : premium-section-black
```

**Résultat** :
- Fond noir (#000000)
- Texte en blanc (#FFFFFF)
- Boutons en OR plein (#D4AF37)
- Hover : OR foncé (#B8962E)

## 📋 Caractéristiques des Styles

### Typographie
- **Titres** : Uppercase avec letter-spacing 0.1em
- **Sous-titres** : Poids de police plus léger (300)
- **Hiérarchie visuelle** : Taille des titres adaptative (clamp)

### Boutons

#### Sur Fond Blanc
- Style : Contour OR (border: 1px solid #D4AF37)
- Fond : Transparent
- Texte : Noir
- **Hover** : Fond OR + texte noir + légère élévation

#### Sur Fond Noir
- Style : Plein OR (#D4AF37)
- Fond : OR
- Texte : Noir
- **Hover** : OR foncé (#B8962E) + élévation + ombre

### Inputs Email (Newsletter)

#### Sur Fond Blanc
- Fond : Blanc
- Bordure : Gris clair (hover: OR)
- Texte : Noir
- Placeholder : Gris moyen

#### Sur Fond Noir
- Fond : Blanc semi-transparent (rgba(255, 255, 255, 0.1))
- Bordure : Blanc semi-transparent (hover: OR)
- Texte : Blanc
- Placeholder : Blanc semi-transparent

## 🎯 Exemples d'Utilisation

### Exemple 1 : Newsletter Standard (Automatique)

Dans l'éditeur de thème Shopify :
1. Ajoutez une section "Section"
2. Ajoutez un bloc "Email signup"
3. ✅ Les styles premium s'appliquent automatiquement !

### Exemple 2 : Section Promotionnelle avec Fond Noir

Pour créer une section promotionnelle importante avec fond noir :

1. Dans l'éditeur de thème, ouvrez la section
2. Dans les paramètres avancés, ajoutez une classe CSS personnalisée :
   ```
   premium-section-black
   ```

### Exemple 3 : Section avec Fond Blanc Personnalisé

Pour forcer un fond blanc sur une section spécifique :

1. Dans les paramètres avancés de la section, ajoutez :
   ```
   premium-section-white
   ```

## 🎨 Palette de Couleurs

| Élément | Couleur | Code |
|---------|---------|------|
| Fond Blanc | Blanc | #FFFFFF |
| Fond Noir | Noir profond | #000000 |
| Or Principal | Or | #D4AF37 |
| Or Hover | Or foncé | #B8962E |
| Texte sur Blanc | Noir | #000000 |
| Texte sur Noir | Blanc | #FFFFFF |

## ♿ Accessibilité

Tous les styles respectent les standards WCAG :
- ✅ Contraste minimum 4.5:1 (texte normal)
- ✅ Contraste minimum 3:1 (grand texte)
- ✅ Support du mode contraste élevé
- ✅ Transitions fluides (respect de prefers-reduced-motion)

## 📱 Responsive

Les styles s'adaptent automatiquement aux écrans mobiles :
- Tailles de police réduites sur mobile
- Padding ajusté pour les boutons
- Espacement optimisé pour les petits écrans

## 🔧 Personnalisation Avancée

Si vous souhaitez modifier les couleurs ou les styles, éditez le fichier :
```
assets/base.css
```

Recherchez la section :
```css
/* ============================================
   ERZANA SHOES - Styles Premium Sections
   Newsletter & Promotional Sections
   ============================================ */
```

### Variables CSS disponibles :
```css
--color-premium-gold: #D4AF37;
--color-premium-gold-dark: #B8962E;
--color-premium-black: #000000;
--color-premium-white: #FFFFFF;
```

## 🚀 Résultat Attendu

Après application, vos sections newsletter et promotionnelles auront :
- ✨ Un aspect plus premium et luxueux
- 🎯 Une meilleure hiérarchie visuelle
- 💎 Des boutons en OR qui attirent l'attention
- 📱 Un design responsive optimisé
- ♿ Une accessibilité maximale

---

*Styles créés pour Erzana Shoes - Thème Shopify Premium*


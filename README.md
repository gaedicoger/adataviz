# 🌳 Adataviz

**Découvre le patrimoine arboré de Nantes et sa métropole !**

## 📋 Description

Adataviz est une application web interactive permettant d'explorer le patrimoine arboré de Nantes Métropole. Les utilisateurs peuvent rechercher des arbres par commune, visualiser leurs caractéristiques détaillées sous forme de cartes, et consulter une carte interactive de leur localisation.

## ✨ Fonctionnalités

- **Recherche par commune** : Filtrer les arbres selon la commune souhaitée
- **Affichage en cartes** : Visualisation des informations de chaque arbre (genre, espèce, âge, stade de développement, hauteur)
- **Chargement progressif** : Bouton "Charger plus" pour afficher davantage de résultats
- **Carte interactive** : Visualisation géographique des arbres via iframe intégrée
- **Détails extensibles** : Bouton "En savoir +" sur chaque carte pour afficher des informations supplémentaires

## 🛠️ Technologies utilisées

- **HTML5** : Structure de la page
- **CSS3** : Stylisation (fichier style.css référencé mais non fourni)
- **JavaScript (ES6+)** : Logique applicative avec modules ES6
- **API REST** : [API Open Data de Nantes Métropole](https://data.nantesmetropole.fr)

## 📂 Structure du projet

```
.
├── index.html              # Page principale
├── src/
│   ├── main.js            # Point d'entrée de l'application
│   ├── call-data.js       # Appel initial à l'API
│   ├── search-bar.js      # Gestion de la recherche par commune
│   ├── display-cards.js   # Affichage des cartes d'arbres
│   ├── load-plus.js       # Pagination (bouton "Charger plus")
│   ├── button-map.js      # Toggle de la carte interactive
│   └── style.css          # Styles CSS (non fourni)
└── img/                   # Images des icônes de stades de développement
    ├── adulte.png
    ├── juvenile.png
    ├── jeune.png
    ├── mature.png
    └── default.png
```

## 🚀 Installation et lancement

### Prérequis

- Node.js et npm (ou tout serveur de développement local)

### Étapes

1. **Cloner le projet**

   ```bash
   git clone [url-du-repo]
   cd adataviz
   ```

2. **Installer les dépendances** (si un package.json existe)

   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**

   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:5173
   ```

## 📊 Source des données

Les données proviennent de l'**API Open Data de Nantes Métropole** :

- **Dataset** : `244400404_patrimoine-arbore-nantes-metropole`
- **Endpoint** : `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/`
- **Filtres appliqués** :
  - Arbres avec année de plantation renseignée
  - Arbres avec genre (lib_genre) renseigné

## 🎯 Fonctionnement de l'API

### Appel par défaut (20 premiers arbres)

```javascript
GET https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_patrimoine-arbore-nantes-metropole/records?where=annee_plantation%20IS%20NOT%20NULL%20and%20lib_genre%20IS%20%20NOT%20NULL&limit=20
```

### Recherche par commune

```javascript
GET ...&refine=nom%3A%22${commune}%22
```

### Pagination

```javascript
GET ...&limit=20&offset=${offset}
```

## 🎨 Caractéristiques des arbres affichées

- **Genre** (lib_genre) : Ex: Quercus, Tilia, Acer
- **Espèce** (lib_espece) : Ex: robur, cordata, platanoides
- **Commune** (nom) : Commune de plantation
- **Année de plantation** (annee_plantation)
- **Classe d'âge** (classe_age)
- **Stade de développement** (lib_stade_developpement) : Jeune, Juvénile, Adulte, Mature
- **Hauteur totale** (lib_hauteur_totale)

## 📝 Licence

Ce projet est à but éducatif.

## 👥 Auteur

Projet réalisé dans le cadre d'une formation en développement web.

---

**Note** : Les données sont fournies par Nantes Métropole sous licence Open Data.

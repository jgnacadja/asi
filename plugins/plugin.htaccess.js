module.exports = {
  use: "gridsome-plugin-htaccess",
  options: {
    pingable: false,
    textCompression: [
      "text/html",
      "application/javascript",
      "text/css",
      "image/png",
    ],
    redirections: [
      {
        from: "/notre-histoire-2",
        to: "/qui-sommes-nous",
      },
      {
        from: "/adn-2",
        to: "/qui-sommes-nous",
      },
      {
        from: "/choisir-la-france",
        to: "/etudier-en-france",
      },
      {
        from: "/nos-conseils",
        to: "/blog",
      },
      {
        from: "/partenaires-institutionnels",
        to: "/partenaires",
      },
      {
        from: "/partenaires-logement",
        to: "/partenaires/immobilier",
      },
      {
        from: "/AVI",
        to: "/nos-services/ma-caution-bancaire",
      },
      {
        from: "/logement",
        to: "/nos-services/mon-logement",
      },
      {
        from: "/mon-compte-bancaire-en-france",
        to: "/nos-services/mon-compte-bancaire",
      },
      {
        from: "/studely-une-nouvelle-signature-tournee-vers-lavenir",
        to: "/article/studely-une-nouvelle-signature-tournee-vers-lavenir",
      },
      {
        from:
          "/trouver-mon-logement-etudiant-en-france-depuis-mon-pays-dorigine-est-ce-possible",
        to:
          "/article/trouver-mon-logement-etudiant-en-france-depuis-mon-pays-dorigine-est-ce-possible",
      },
      {
        from: "/deconfinement-en-france-studely-repond-a-vos-questions",
        to: "/article/deconfinement-en-france-studely-repond-a-vos-questions",
      },
      {
        from: "/attestation-de-virement-irrevocable-questions-reponses",
        to:
          "/article/attestation-de-virement-irrevocable-un-investissement-rentable",
      },
      {
        from:
          "/article/attestation-de-virement-irrevocable-un-investissement-rentable",
        to:
          "/article/attestation-de-virement-irrevocable-un-investissement-rentable",
      },
      {
        from: "/il-est-temps-de-penser-a-votre-demande-de-visa-long-sejour",
        to:
          "/article/il-est-temps-de-penser-a-votre-demande-de-visa-long-sejour",
      },
      {
        from: "/comment-reussir-son-entretien-campus-france-en-visioconference",
        to:
          "/article/comment-reussir-son-entretien-campus-france-en-visioconference",
      },
      {
        from: "/etudier-en-france-le-recapitulatif",
        to: "/article/etudier-en-france-le-recapitulatif",
      },
      {
        from: "/parcoursup-mode-demploi-pour-les-etudiants-internationaux",
        to:
          "/article/parcoursup-mode-d-emploi-pour-les-etudiants-internationaux",
      },
      {
        from:
          "/comment-bien-completer-mon-dossier-et-le-soumettre-a-campus-france",
        to:
          "/article/comment-bien-completer-mon-dossier-et-le-soumettre-a-campus-france",
      },
      {
        from:
          "/concours-post-bac-pour-entrer-en-ecole-dingenieurs-studely-vous-en-dit-plus",
        to:
          "/article/concours-post-bac-pour-entrer-en-ecole-dingenieurs-studely-vous-en-dit-plus",
      },
      {
        from:
          "/comment-reussir-son-concours-dentree-pour-integrer-une-ecole-de-commerce",
        to:
          "/article/comment-reussir-son-concours-dentree-pour-integrer-une-ecole-de-commerce",
      },
      {
        from: "/et-si-vous-optez-pour-une-ecole-dingenieurs-en-france",
        to: "/article/et-si-vous-optez-pour-une-ecole-dingenieurs-en-france",
      },
      {
        from: "/une-ecole-de-commerce-en-france-studely-vous-en-dit-plus",
        to: "/article/une-ecole-de-commerce-en-france-studely-vous-en-dit-plus",
      },
      {
        from: "/tests-de-francais-studely-vous-en-dit-plus",
        to: "/article/tests-de-francais-studely-vous-en-dit-plus",
      },
      {
        from:
          "/les-differents-types-de-master-tout-savoir-sur-les-diplomes-bac5",
        to:
          "/article/les-differents-types-de-master-tout-savoir-sur-les-diplomes-bac5",
      },
      {
        from:
          "/studely-welcome-event-renforcer-les-liens-tisses-avec-vous-depuis-votre-pays-dorigine",
        to:
          "/article/studely-welcome-event-renforcer-les-liens-tisses-avec-vous-depuis-votre-pays-dorigine",
      },
      {
        from: "/pourquoi-choisir-la-france-pour-vos-etudes-superieures",
        to: "/article/pourquoi-choisir-la-france-pour-vos-etudes-superieures",
      },
      {
        from:
          "/les-bonnes-questions-a-se-poser-avant-de-partir-etudier-a-letranger",
        to:
          "/article/les-bonnes-questions-a-se-poser-avant-de-partir-etudier-a-l-etranger",
      },
      {
        from: "/comment-reussir-a-decrocher-un-stage-etudiant-en-france",
        to: "/article/comment-reussir-a-decrocher-un-stage-etudiant-en-france",
      },
      {
        from: "/les-5-avantages-dun-job-etudiant-en-france",
        to: "/article/les-5-avantages-d-un-job-etudiant-en-france",
      },
      {
        from: "/vie-etudiante-en-france-vie-associative-campus",
        to:
          "/article/vie-etudiante-en-france-profitez-de-la-vie-associative-et-de-campus",
      },
      {
        from: "/logement-etudiant-en-france-installation",
        to:
          "/article/logement-etudiant-en-france-5-conseils-pour-une-meilleure-installation",
      },
      {
        from:
          "/securite-sociale-des-etudiants-ce-qui-change-a-partir-du-1er-septembre-2019",
        to:
          "/article/securite-sociale-etudiante-ce-qui-change-a-partir-du-1er-septembre-2019",
      },
      {
        from: "/la-voie-du-recours-apres-un-refus-de-visa-etudiant",
        to: "/article/la-voie-du-recours-apres-un-refus-de-visa-etudiant",
      },
      {
        from:
          "/studely-la-banque-postale-mobilisent-leur-expertise-pour-faciliter-lintegration-des-etudiants-internationaux",
        to:
          "/article/studely-and-la-banque-postale-mobilisent-leur-expertise-pour-faciliter-l-integration-des-etudiants-internationaux",
      },
      {
        from: "/etudiants-internationaux-preparez-votre-arrivee-en-france",
        to:
          "/article/etudiants-internationaux-preparez-votre-arrivee-en-france",
      },
      {
        from:
          "/studely-plus-quun-garant-pour-votre-logement-etudiant-en-france",
        to:
          "/article/studely-plus-qu-un-garant-pour-votre-logement-etudiant-en-france",
      },
      {
        from: "/tout-savoir-sur-le-pret-etudiant-de-studely",
        to: "/article/tout-savoir-sur-le-pret-etudiant-de-studely",
      },
      {
        from: "/studely-votre-guichet-unique-a-distance-depuis-la-france",
        to: "/article/studely-votre-guichet-unique-a-distance-depuis-la-france",
      },
      {
        from: "/glossaire-logement",
        to: "/article/lexique-du-logement-etudiant-en-france",
      },
      {
        from:
          "/combien-devrais-je-payer-pour-mon-futur-logement-etudiant-en-france",
        to:
          "/article/combien-devrais-je-payer-pour-mon-futur-logement-etudiant-en-france-prix-des-logements-en-france/",
      },
      {
        from:
          "/logement-etudiant-en-france-justification-signature-contrat-de-bail",
        to:
          "/article/logement-etudiant-en-france-justification-signature-contrat-de-bail",
      },
      {
        from: "/avi-financement-de-vos-etudes-en-france",
        to: "/article/avi-financement-de-vos-etudes-en-france",
      },
      {
        from: "/justification-ressources-financieres-visa-etudiant",
        to: "/article/justification-ressources-financieres-visa-etudiant",
      },
      {
        from: "/motif-5-refus-du-visa-etudiant-france-logement",
        to: "/article/motif-5-refus-du-visa-etudiant-france-logement",
      },
      {
        from: "/motif2-refus-visa-etudiant-france-ressource-financieres",
        to: "/article/moif2-refus-visa-etudiant-france-ressource-financieres",
      },
      {
        from: "/financement-projet-etudes-en-france",
        to: "/article/financement-projet-etudes-en-france",
      },
      {
        from: "/completer-procedure-parallele",
        to: "/article/completer-procedure-parallele",
      },
      {
        from: "/admission-refus-universites-ecoles-francaises",
        to: "/article/admission-refus-universites-ecoles-francaises",
      },
      {
        from: "/crous-procedure-logement-etudiant",
        to: "/article/crous-procedure-logement-etudiant",
      },
      {
        from: "/date-limite-soumission-dossiers-hors-dap",
        to: "/article/date-limite-soumission-dossiers-hors-dap",
      },
      {
        from: "/comment-reussir-entretien-campus-france",
        to: "/article/comment-reussir-son-entretien-campus-france",
      },
      {
        from: "/liste-concours-admission-ecole",
        to: "/article/liste-concours-admission-ecole",
      },
      {
        from: "/choix-de-formation-en-france",
        to: "/article/choix-de-formation-en-france",
      },
      {
        from:
          "/51-universites-refusent-la-hausse-des-frais-de-scolarite-pour-les-etudiants-etrangers",
        to:
          "/article/51-universites-ont-dit-non-a-la-hausse-des-frais-de-scolarite-des-etudiants-extra-europeens",
      },
      {
        from: "/plus-que-quelques-jours-pour-finaliser-ses-demarches-hors-dap",
        to:
          "/article/plus-que-quelques-jours-pour-finaliser-ses-demarches-hors-dap",
      },
      {
        from: "/vivez-noel-autrement",
        to: "/article/vivez-noel-autrement",
      },
      {
        from:
          "/ressources-financieres-etudiantes-10-pistes-pour-bien-gerer-vos-depenses",
        to:
          "/article/ressources-financieres-etudiantes-10-pistes-pour-bien-gerer-vos-depenses",
      },
      {
        from:
          "/rencontres-innovation-international-sud-un-pari-reussi-pour-studely",
        to:
          "/article/rencontres-innovation-international-sud-un-pari-reussi-pour-studely",
      },
      {
        from: "/bons-plans-pour-une-meilleure-vie-en-france",
        to: "/article/bons-plans-pour-une-meilleure-vie-en-france",
      },
      {
        from: "/ressources-financieres-3-reponses-pour-3-questions",
        to: "/article/ressources-financieres-3-reponses-pour-3-questions",
      },
      {
        from:
          "/les-5-bons-reflexes-quil-faut-avoir-pour-reussir-son-projet-detudes-en-france",
        to:
          "/article/les-5-bons-reflexes-qu-il-faut-avoir-pour-reussir-son-projet-d-etudes-en-france",
      },
      {
        from: "/studely-ouvre-ses-portes-au-mali-2",
        to: "/article/studely-ouvre-ses-portes-au-mali-2",
      },
      {
        from: "/studely-ouvre-ses-portes-au-mali",
        to: "/article/studely-ouvre-ses-portes-au-mali",
      },
      {
        from: "/demande-de-visa-studely",
        to: "/article/demande-de-visa-studely",
      },
      {
        from: "/bail-etudiant-studely",
        to: "/article/logement-en-france-tout-savoir-sur-le-bail-etudiant",
      },
      {
        from: "/etudier-en-france-le-bon-choix",
        to: "/article/etudier-en-france-le-bon-choix",
      },
      {
        from: "/comment-renouveler-son-attestation",
        to: "/article/comment-renouveler-son-attestation",
      },
      {
        from: "/visa-etudiant-criteres-studely",
        to: "/article/visa-etudiant-criteres-studely",
      },
      {
        from: "/resultats-dap",
        to: "/article/resultats-dap-comment-se-preparer-a-la-suite/",
      },
      {
        from: "/visa-etudiant-criteres-studely",
        to: "/article/resultats-dap-comment-se-preparer-a-la-suite/",
      },
      {
        from: "/etablissements-non-connectes-a-campus-france",
        to: "/article/etablissements-non-connectes-a-campus-france",
      },
      {
        from: "/attendant-reponses-universites",
        to: "/article/attendant-reponses-universites",
      },
      {
        from: "/attendant-reponses-universites",
        to: "/article/en-attendant-les-reponses-des-ecoles-et-universites",
      },
      {
        from: "/reussissez-votre-entretien-campus-france",
        to: "/article/reussissez-votre-entretien-campus-france-grace-a-studely",
      },
      {
        from: "/ecrire-une-lettre-de-motivation",
        to: "/article/comment-ecrire-une-bonne-lettre-de-motivation",
      },
      {
        from:
          "/studely-au-coeur-de-linnovation-pour-lattractivite-de-lenseignement-superieur",
        to:
          "/article/studely-au-coeur-de-linnovation-pour-lattractivite-de-lenseignement-superieur",
      },
      {
        from: "/linda-premiere-studelienne",
        to: "/article/linda-premiere-studelienne",
      },
    ],
  },
};

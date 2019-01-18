
(https://carolinnevandersteen.github.io/jQuery-form/)


# Interactief formulier

## Praktische informatie

* Repository: `jQuery-form`
* Deadline: 1 day
* Delivery: Github page (published)

## Leerdoelstellingen

* Gebruik maken van de aangeleerde [JavaScript](https://htmlcheatsheet.com/js/) & [jQuery](https://htmlcheatsheet.com/jquery/);
* Input kunnen vragen aan de gebruiker, en handelingen kunnen uitvoeren op basis van/met data.
* Een "probleem" leren opsplitsen in "deelproblemen".

## Opdracht

Het doel is om een interactief formulier te creëren dat geanimeerd wordt dankzij **jQuery**. Het zal een zeer eenvoudig formulier zijn, met enkele velden die hun stijl **CSS** zullen zien veranderen afhankelijk van de actie van de gebruiker. Het doel is om de ingevoerde informatie te controleren: aantal tekens, controleer of de bevestiging van het wachtwoord identiek is aan het ingevoerde wachtwoord, controleer of alle velden zijn ingevuld, enz.....

Dit formulier bevat vier velden:

* een `tekst` veld voor de bijnaam;
* een `wachtwoord` veld voor het wachtwoord;
* een tweede veld met een `wachtwoord` voor de bevestiging van het wachtwoord;
* en een laatste `email` veld voor het e-mail adres.

Twee knoppen zullen respectievelijk de gegevens verzenden en de velden wissen. Geen servertaal voor deze oefening: alles moet aan de client kant gedaan worden.

Je dient ervoor te zorgen dat de gebruiker de juiste informatie op de juiste manier invoert:

* Alle velden moeten ten minste 5 karakters bevatten;
* Het wachtwoord en de bevestiging moeten hetzelfde zijn;
* Als de velden leeg zijn tijdens het verzenden, wordt er een foutmelding weergegeven.

Om de bezoeker op de fout te wijzen, gebruik gewoon **CSS** : een rode veldgrens zou moeten volstaan. Als het veld goed is, kan je de kleur van het juiste veld veranderen in groen.

**Belangrijk:**
Vergeet niet dat je alle gevallen moet behandelen, omdat je de gebruiker nooit mag vertrouwen! We geven je een skelet om mee te beginnen! Het bevat de **HTML** code , de **CSS** code , en maakt gebruik van **Bootstrap** en **jQuery**!

## Bonus

Dit formulier kan verder worden verbeterd, in die zin dat je de mogelijkheden van de gebruiker verder kunt beperken, bijvoorbeeld door een bepaald aantal tekens in de bijnaam niet te overschrijden. De stijl is momenteel ultra basic, niets weerhoudt je ervan om het nog geavanceerder te maken, zodat de gebruikerservaring tot het uiterste wordt uitgediept.

Er kunnen enkele veiligheidsverbeteringen worden aangebracht:

* U kon het formaat van het e-mailadres controleren, dankzij een reguliere expressie, gemaakt met als onderwerp [`Regex`](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) van **JavaScript** ;
* Je had ook kunnen controleren of het wachtwoord veilig was, bijvoorbeeld door een mini beveiligingsindicator te maken op basis van het aantal tekens, hun diversiteit, enz.
* Het is mogelijk om voor elk veld een helpbericht weer te geven wanneer de gebruiker er tekst intypt.

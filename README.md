@qui
Ciao ragazzi,
nome repo di oggi: js-jsnacks-blocco-1
SNACK 1:
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
SNACK 2:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell'array
SNACK 3:
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
BONUS:
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Numero push: 15 circa
Create una sotto-cartella per ogni jsnack e riportate la consegna all'inizio del file js.
La struttura dei file dovrebbe essere la seguente:
`jsnack1 (cartella)
- index.html
- script.js
jsnack2 (cartella)
- index.html
- script.js`
e così via (modificato)

///////////////////////////////////////////////////////
SNACK 1:
- dichiaro una array che contenga la lista degli invitati
- recupero il valore del bottone dal dom
- assegno al bottone un eventlistener al click
    - recupero il valore del campo input per il nome dell'utente
    - recupero il valore da un'id per il messaggio all'utente
    - ?SE utilizzo il metodo .inculdes per verificare se l'utente è nella lista degli invitati, se corrisponde
        - mostro un messaggio di benvenuto
    - :ALTRIMENTI
        - mostro un messaggio di rifiuto
//////////////////////////////////////////////////////
SNACK 2:
- dichiaro una array
- inizio un ciclo for
    - dichiaro una variabile con valore aquisito da un prompt
    - ?SE verifico che il numero sia dispari utilizzando l'operatore resto
        se è dispari lo aggiungo a l'array utilizzando il metodo push
- stampo in console l'array
/////////////////////////////////////////////////////


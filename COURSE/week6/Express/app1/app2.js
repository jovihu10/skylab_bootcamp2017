const express= require('express')
const app = express()
app.get('/book:bookId', (req, res) => {
	res.send(req.params)

})

app.get('/books', (req, res) => {
	console.log(req.query)
	res.send()

})

const countries = {
	is country: true,
	countries: ["Spain","Egypt","South Corea","Italy","France","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
}

app.get('data', (get,res) =>{
	const filter = re.query.filter
	const oFilteredCountries = oCountries.countries
	if (filter){
		oCountries.countries = oFilteredCountries.filter(country =>{
			return filter ? filter === country:true
	}
	res.json(oFilteredCountries)
})

app.listen(3001)


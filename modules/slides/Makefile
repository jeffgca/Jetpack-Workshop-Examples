run:
	$(MAKE) start
	$(MAKE) open-master
start:
	twistd web --path . --port tcp:8080
open-master:
	open http://localhost:8080/master.html
open-controls:
	open http://localhost:8080/controls#slides.html
open-onepage:
	open http://localhost:8080/slides.html
# use slides.html for a single-page
stop:
	kill `cat twistd.pid`

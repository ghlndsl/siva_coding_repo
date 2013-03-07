
youku_lixian
python youku.py 视频地址
python youku,py --playlist url

def main():
    script_main('youku', youku_download, youku_download_playlist)



# script_main defined @ common.py

def synchronize_project(app, project, fetcher, force=False):
    with app.test_request_context():
        key = REDIS_SYNC_LOCK_KEY.format(project=project)

        with redis.lock(key, timeout = 60*10):
            logger.info("synchronizing '%s' from pypi.python.org", project)

            project = store.project(project)
            versions = fetcher.versions(project.name)

            for ver in versions:


// 头好疼啊！
//有点晕，其实因为接触了很多新的API
// Flask, sqlalchemy, flask.ext.redistore,db

from flask.ext.redistore import Redistore
from flask.ext.sqlalchemy import SQLAlchemy

MODULES = [
    {"name": "packages", "models": True},
    {"name": "synchronize", "commands": True},
    {"name": "simple", "views": True},
]

db = SQLAlchemy(session_options={"autoflush": True})
redis = Redistore()

def create_app(config = None):
    app = Flask("warehouse")
    logger.debug("Loading configuration from 'warehouse.default'")
    
    app.config.from_object("warehouse.default")
    #load configuration
    if "WAREHOUSE_CONF" in os.environ:
        app.config.from_envvar("WAREHOUSE_CONF")

    if config:
        app.config.from_pyfile(config)

    #initialize the database
    db.init_app(app)
    #initialize redis
    redis.init_app(app)

    for module in MODULES:
        if module.get("models"):
            importlib.import_module("warehouse.%(name)s.models" % module)
        if module.get("views"):
            mod = importlib.import_module("warehouse.%(name)s.views" % module)
            for blueprint in mod.BLUEPRINTs:
                app.register_blueprint(blueprint)
2@
    return app

script = Manager(create_app)

if module in MODULES:
    if module.get("commands"):
        importlib.import_module("warehouse.%(name)s.commands" % module)


class Synchronize(Command):
    """
    Synchronize warehouse with pypi
    """
    option_list = [
        Option("projects", nargs="*", help="list of projects to synchronize"),
        #other
    ]

    def run(self, projects=None, concurrency=10,progress=True, 
        force=False, since=None, full=False, store_since=True, 
        raise_exc=False,repeat=False, timeout=None):

        projects = [x.decode("utf-8") for x in projects]
        if projects:
            #log specific projects
        else:
            logger.info("will sync all projects form pypi")

        pool = eventlet.GreenPool(concurrency)

        fetch_since = not since and not full

        for _ in utils.repeat_every(
                seconds = repeat if repeat else 0,
                times = None if repeat else 1,
            );

            # Run the actual Synchronization
            synced = syncer(projects,
                        since=since,
                        pool=pool,
                        progress=progress,
                        force=force,
                        raise_exc=raise_exc,
                        timeout=timeout,
                    )

            if store_since:
                redis.set(REDIS_SYNC_LOCK_KEY, synced)
            logger.info("sync completed at %s", synced)

def syncer(projects=None, since=None, fetcher=None, pool=None, progress=True,
        force=False, raise_exc=False, timeout=None):
    if fetcher is None:
        fetcher = PyPIFetcher()

    current = fetcher.current()

    for classifier in fetcher.classifiers():
        store.classifier(classifier) #from warehouse.packages import store
    #commit the classifiers
    db.session.commit()

    if projects:
        if progress:
            bar = ShadyBar("Synchronizing", max=len(projects))
        else:
            bar = DummyBar()

        app = create_app()

        results = []

        with app.app_context():
            if timeout is None:
                timeout = app.config["SYNCHRONIZATION_TIMEOUT"]

            #重点
            with eventlet.Timeout(timeout, SynchronizationTimeout):
                for project in bar.iter(projects):
                    results.append(
                        pool.spawn(synchronize_project, #pool开始发力，iter，但是保持在count=10之内
                                app,
                                project,
                                fetcher,
                                force,
                        ),
                    )

        for result in results:
            # Wait for the result so that it will raise an exception if one
            #   occured
            try:
                result.wait()
            # Catch a general Exception here because we do not know what will
            #   be raised by the green thread.
            except Exception:
                pass

    return current

def synchronize_project(app, project, fetcher, force=False):
    with app.test_request_context():
        key = REDIS_SYNC_LOCK_KEY.format(project=project)

        with redis.lock(key, timeout=60 * 10):
            logger.info("Synchronizing '%s' from pypi.python.org", project)

            project = store.project(project)
            versions = fetcher.versions(project.name)

            for ver in versions:
                pass # other version,distrition[diff]

            
            diff.versions(project, versions)
            db.session.commit()

script.add_command("sync", Synchronize())

#packages.store.py
from warehouse import db
from warehouse.packages.models import (
                                    Classifier,
                                    Project,
                                    Version,
                                    File,
                                    FileType,
                                )
from warehouse.utils import ropen

def project(name):
    try:
        proj = Project.query.filter_by(name=name).one()

        # This object already exists, so if yanked is True we need to make it
        #   "new"
        if proj.yanked:
            proj = _delete(proj)
    except NoResultFound:
        proj = None

    if proj is None:
        proj = Project(name)

    # Explicitly set yanked to False. If somehow we are un-yanking instead of
    #   creating a new object the Database will cause an error.
    proj.yanked = False

    db.session.add(proj)

    return proj

def distribution_file(dist, dist_file):
    app = flask.current_app

    # Generate all the hashes for this file
    hashes = {}
    for algorithm in hashlib.algorithms:
        hashes[algorithm] = getattr(hashlib, algorithm)(dist_file).hexdigest()

    parts = []
    # If we have a hash selected include it in the filename parts
    if app.config.get("STORAGE_HASH"):
        parts += list(hashes[app.config["STORAGE_HASH"]][:5])
        parts += [hashes[app.config["STORAGE_HASH"]]]
    # Finally end the filename parts with the actual filename
    parts += [dist.filename]

    # Join together the parts to get the final filename
    filename = os.path.join(*parts)

    # Open the file with the redirected open (ropen) and save the contents
    with ropen(filename, "w") as fp:
        fp.write(dist_file)

    # Set the hashes and filename for the distribution
    dist.hashes = hashes
    dist.file = filename

READ
user = query_db("select * from user where username = ?",[], one=True)
select <field> from <table> where <field> =xx
select message.*, user.* from <t1>,<t2> where message.author_id = user.user_id order by message.pub_date desc limit?
('select 1 from follower where follower.who_id=? and follower.whom_id=?', [], one=True)

def query_db(query, args=(), one=False):
    cur = get_db.execute(query, args)
    rv = cur.fetchall()
    return (rv[0] if rv else None) if none else rv

def get_db():
    top = _app_ctx_stack.top
    if not hasattr(top, 'sqlite_db'):
        top.sqlite_db = sqlite3.connect(app.config['DATABASE'])
        top.sqlite_db.row_factory = sqlite3.Row
    return top.sqlite_db

db = get_db()
db.execute("insert into user () values (?,?,?)", [])
db.commit()

@app.teardown_appcontext
def close_database(exception):
    top = _app_ctx_stack
    if hasattr(top, "sqlite_db"):
        top.sqlite_db.close()


#整体感受，对比bottle和sinatra
app.jinja_env.filters['datetimeformat'] = format_datetime
@app.teardown_appcontext
@app.before_request
def before_request():
    g.user = None
    if "user_id" in session:
        g.user = query_db("select * from user where user_id=?", [session['user_id']],one=True)

#@blueprintexample
#app = Flask(__FILE__)

self.app = blueprintexample.app.test_client()
r = self.app.get('/')
self.assertEquals(r.status_code, 200)



insert
insert into user (username, email, pw_hash) values (?,?,?). []
delete
delete from follower where who_id=? and whom_id=?
update
a record value in table where 
drop - table




db = get_db()
db.execute(
    insert into user (username, email, pw_hash) values (?,?,?). []
)
db.commit()


@app.route('invoice/new', method= ['GET','POST'])
def new_invoice():
    if request.method == 'POST':
        invc = Invoice(g.user_id, request.form)
        db.session.add(invc)
        return redirect(url_for('show_invoice'), invoice_id = invc.id)
    return render_template('new_invoice.html')

@app.route('invoice/<int:invoice_id>')
def show_invoice(invoice_id):
    invoice = Invoice.query.get_or_404(invoice_id)
    return render_template('invoice.html', invoice=invoice)

{% extends 'layout.html' %}
{% block body %}
    {{ g.user_name }}
    <ul class=entries>
    {% for entry in entries %}
        <li><h2>{{ entry.title }}</h2>{{ entry.text|safe }}</li>
    {% endfor %}
    </ul>
{% endblock %}

# rich ways to config
app.config.from_object()

#middleware
@app.before_request
def before_request():
    g.db = sqlite3.connect()

@app.teardown_appcontext
def teardown_request(exception):
    d.db.close()


from flask import request_started #signal
request_started.connect(log_request, app)

#streaming
@app.route('/large.csv')
def generate_large_csv():
    def generate():
        for row in iter_all_rows():
            yield ','.join(row) + '\n'
    return Response(generate(), mimetype='text/csv')

# testing
from yourapp import app
class FlaskTestCase(unittest.TestCase):
    def test_invoice_access(self):
        app.testing = True
        with app.test_client() as app:
            rv = app.get("/invoice/3?fmt=json")
            assert rv.status_code == 200

app = Flask(__name__)
db = SQLALchemy(app)
manager = APIManager(app, flask_sqlalchmy_db = db)
manager.create_api(Product, methods=['GET', 'POST', 'DELETE'])

bookmarks = Blueprint('bookmarks', __name__)
@bookmarks.route("/")
def list():
    return object_list('bookmarks/index.html', Bookmark.select())
@bookmarks.route('/add/'):
    Bookmark.get_or_create(url = request.args.get('url'))
    return redirect(url or url_for('bookmarks.list'))
app.register_blueprint(bookmarks)

#baze podataka: SQLALchemy, Mongo, CouchDB
#development: DebugToolbar, TESTING, exceptional..
#A&A, Principal, OAuth, OpenId

Flask is a micro-framework
only Werkzeug(WSGI toolkit), Jinja2 and a bunch of good things on top
the idea of Flask is to build a good foundation for all applications.
everything else is up to you or extensions

blueprints as glue for views
extensions as real batteries for our application
ORM(flask-SQLALchemy, Flask-Peewee, Flask-MongoEngine and many others)
forms(Flask-WTF)
Flask-Scripts, Flask-Testing,Flask-Dropbox, Flask-FlatPages, Froze-Flask. etc

run?
python app.py
python manager.py runserver -p 4321
gunicorn appname.app -b 0.0.0.0:5000
cat /etc/uwsgi/sites-available/appname.ini
chdir=/path/to/appname
venv=%(chdir)/env

# what broke responsiveness?
.container{
    width: 960px;
}
# what steps should we take?
1 semantic html
2 oocss - loose couple content styling from layout style
core.css, layout.css(use media query to determine whether or not to include)
keep module style together:
justify content(use `selector-queries` to determine element's class -Big Small)
3 navigation
#相对大小
<link rel="stylesheet" href="layout.css" media="screen and (min-width: 40em)">
set layout viewpoint width to the device width
responsive images
#enhancing content
if ($(document).width() > 640) {
    $.get('path/to/html', function(date){
        $('[role="complementary"]').append(data);
        });
}

# bad
@media screen and (min-width: 60em) {
    .product .title {
    font-size: 1.em;
    }
}
# keep modules together
<div class="product" data-squery="min-width:400px=wide max-width:10em=small">
.product img {
    max-width: 100%；
}
.product.wide img {
    float: left;
    margin-right: 1em;
    max-width: auto;
}

THEY ARE Bad, Not best practices

.share-styles {
    border: 1px solid #f0f;
    font: 1.2em/2.4em Comic Sans;
}
.cohensive-group-a {
    .share-styles();
    color: #00f;
}
.cohensive-group-b {
    .share-styles();
    color: #f00;
}
extend和mixin的区别

js引擎的selector的效率

Tactical HTML CSS
components - user interface concepts & design patterns
modules - business logic
core - base style for entire site

layouts are big page parts
layouts in css
.l-navigation
.l-her
.l-featured
.l-legal

modules are small parts
.featured-list
.featured-list .title
.featured-list .item

flexible selectors: shorts

flexible selectors:elements
nav, button, input, aside

flexible selectors use classes(for everything else)

如何理解
flexbile selectors arenot shared with javascript
meaningful names: 
what stuff is
not what stuff look like(.red, lp10,)
.emphasized-list, .featured-products,button.primary

logical groups may contain duplicate styles
how to fix duplication:
preprocessors
把常见的snippet变成mixin，然后加入到
区别@extend


nesting is cool!
not meaning multiple redundant selectors
.bookilst{
    .cover{
        .title{}
        .author()
    }
}


flexible css means separation of concerns

// Utility classes
.pull-right {
    float: right;
}
.pull-left {
    float: left;
}
.hide {
    display: none;
}
.show {
    display: block;
}
.invisible {
    visibility: hidden;
}

.affix {
    position: fixed;
}
.clearfix {
    @include clearfix();
}
// Accessible yet invisible text
.hide-text {
    @include hide-text();
}
// Uses box-sizing mixin, so must be defined here
.input-blokc-level {
    @include input-block-level();
}









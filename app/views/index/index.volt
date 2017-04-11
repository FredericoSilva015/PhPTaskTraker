<section class="row">

  <h1>Task Manager</h1>
<!-- to allow drag and drope i choose the HTML5 apraoch wich is minimalist and already integrated, simplifying the task -->
<!-- the script handles the tranfer of the items by the events and creates/destroys elemnts on dom  -->
  <article class="col-md-4"  >
      <h2>Pending</h2>
      <div id="Pending" ondrop="drop(event)" ondragover="allowDrop(event)">

      {% for tasks in task %}
        {% if tasks.Action is "Pending"%}
        <div id="{{tasks.ID}}" class="task" draggable="true" ondragstart="drag(event)"><span class="col-md-8"> {{tasks.Name}} </span><button  onclick="destroy(this)" class="close col-md-4" aria-label="Close"><span aria-hidden="true">×</span></button></div>
        {% endif %}
      {% endfor %}

      </div>
  </article>

  <article class="col-md-4" >
      <h2>Progress</h2>
      <div id="Progress" ondrop="drop(event)" ondragover="allowDrop(event)">

      {% for tasks in task %}
        {% if tasks.Action is "Progress"%}
        <div id="{{tasks.ID}}" class="task" draggable="true" ondragstart="drag(event)"><span class="col-md-8"> {{tasks.Name}} </span><button  onclick="destroy(this)" class="close col-md-4" aria-label="Close"><span aria-hidden="true">×</span></button></div>
        {% endif %}
      {% endfor %}

      </div>

  </article>

  <article class="col-md-4" >
      <h2>Complete</h2>
      <div id="Complete" ondrop="drop(event)" ondragover="allowDrop(event)">

      {% for tasks in task %}
        {% if tasks.Action is "Complete"%}
        <div id="{{tasks.ID}}" class="task" draggable="true" ondragstart="drag(event)"><span class="col-md-8"> {{tasks.Name}} </span><button  onclick="destroy(this)" class="close col-md-4" aria-label="Close"><span aria-hidden="true">×</span></button></div>
        {% endif %}
      {% endfor %}

      </div>

  </article>

</section>

<section class="row">
<!-- Button to creat new div on the task div -->
<form method="get" id="form1">
  <input type="text">
  <!-- <button class="btn btn-lg btn-primary" onclick="build()" type="submit" form="form1" value="task">Add New task</button> -->
  <button  class="btn btn-lg btn-primary" type="submit" value="task">Add New task</button>
</form>
</section>

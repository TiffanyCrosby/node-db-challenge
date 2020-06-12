const express = require('express');

const Projects = require('../data/projectsModel');

const router = express.Router();


router.get('/', (req, res) => {
  Projects.find()
  .then(project => {
    res.status(200).json(project);
  })
  .catch(error => {
      console.log("GET / error", error)
    res.status(500).json({ message: 'Failed to get projects'});
  });
});


router.get('/:id', (req, res) => {
  const id = req.params.id;

  Projects.findById(id)
  .then(project => {
     if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({message: 'We could not find the project by that ID'})
    }
  })
  .catch(error => {
      console.log('GET /id error:', error)
    res.status(500).json({mesasge: 'Failed to get your project'})
  })
})


router.get('/:id/resources', (req, res) => {
  const id = req.params.id;

  Projects.findResources(id)
  .then(resource => {
    res.status(200).json(resource);
  })
  .catch(error => {
      console.log('GET /id/resources error:', error)
    res.status(500).json({message: 'Failed to retrieve resources'})
  })
});


router.get('/:id/tasks', (req, res) => {
  const id = req.params.id;

  Projects.findTask(id)
  .then(task => {
    res.status(200).json(task);
  })
  .catch(error => {
      console.log('GET /id/tasks error:', error)
    res.status(500).json({message: 'Failed to retreive tasks'})
  })
});


router.post('/', (req, res) => {
  const body = req.body;

  Projects.add(body)
  .then(project => {
    res.status(201).json(project);
  })
  .catch (error => {
      console.log('POST / error:', error)
    res.status(500).json({ message: 'Failed to create new project' });
  });
});


router.post('/resources', (req, res) => {
  const body = req.body;


      Projects.addResources(body)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch (error => {
          console.log('POST /resources error:', error)
        res.status(500).json({ message: 'Failed to create new resource'});
    }
  )
});


router.post('/tasks', (req, res) => {
  const body = req.body;

  Projects.addTask(body)
  .then(task => {
    res.status(201).json(task);
  })
  .catch(error => {
      console.log('POST /tasks error:', error)
    res.status(500).json({message: 'Failed to add task'});
  })
})


// router.delete('/:id', (req, res) => {
//   const id = req.params.id;

//   Projects.remove(id)
//   .then(deleted => {
//     if (deleted) {
//       res.status(200).json(`Success,`);
//     } else {
//       res.status(404).json({ message: 'We could not find the project by that ID' });
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to delete project' });
//   });
// });

module.exports = router;
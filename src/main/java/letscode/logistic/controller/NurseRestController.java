package letscode.logistic.controller;

import letscode.logistic.domain.Nurse;
import letscode.logistic.repo.NurseRepo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/nurse")
public class NurseRestController extends AbstractRestController<Nurse, NurseRepo> {
    public NurseRestController(NurseRepo repo) {
        super(repo);
    }
}
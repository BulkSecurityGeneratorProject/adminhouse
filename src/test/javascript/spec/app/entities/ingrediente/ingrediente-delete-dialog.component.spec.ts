/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { AdminhouseTestModule } from '../../../test.module';
import { IngredienteDeleteDialogComponent } from 'app/entities/ingrediente/ingrediente-delete-dialog.component';
import { IngredienteService } from 'app/entities/ingrediente/ingrediente.service';

describe('Component Tests', () => {
    describe('Ingrediente Management Delete Component', () => {
        let comp: IngredienteDeleteDialogComponent;
        let fixture: ComponentFixture<IngredienteDeleteDialogComponent>;
        let service: IngredienteService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [AdminhouseTestModule],
                declarations: [IngredienteDeleteDialogComponent]
            })
                .overrideTemplate(IngredienteDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(IngredienteDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(IngredienteService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});

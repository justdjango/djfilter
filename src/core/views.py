from django.db.models import Q
from django.shortcuts import render
from .models import Journal


def BootstrapFilterView(request):
    qs = Journal.objects.all()
    title_contains_query = request.GET.get('title_contains')
    id_exact_query = request.GET.get('id_exact')
    title_or_author_query = request.GET.get('title_or_author')

    if title_contains_query != '' and title_contains_query is not None:
        qs = qs.filter(title__icontains=title_contains_query)

    elif id_exact_query != '' and id_exact_query is not None:
        qs = qs.filter(id=id_exact_query)

    elif title_or_author_query != '' and title_or_author_query is not None:
        qs = qs.filter(Q(title__icontains=title_or_author_query)
                       | Q(author__name__icontains=title_or_author_query)
                       ).distinct()
    context = {
        'queryset': qs
    }
    return render(request, "bootstrap_form.html", context)
